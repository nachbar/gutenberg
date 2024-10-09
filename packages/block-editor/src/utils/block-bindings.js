/**
 * WordPress dependencies
 */
import { privateApis as componentsPrivateApis } from '@wordpress/components';
import { useDispatch, useRegistry } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../store';
import { useBlockEditContext } from '../components/block-edit';
import { unlock } from '../lock-unlock';

const { DropdownMenuV2 } = unlock( componentsPrivateApis );

function isObjectEmpty( object ) {
	return ! object || Object.keys( object ).length === 0;
}

/**
 * Contains utils to update the block `bindings` metadata.
 *
 * @typedef {Object} WPBlockBindingsUtils
 *
 * @property {Function} updateBlockBindings    Updates the value of the bindings connected to block attributes.
 * @property {Function} removeAllBlockBindings Removes the bindings property of the `metadata` attribute.
 */

/**
 * Retrieves the existing utils needed to update the block `bindings` metadata.
 * They can be used to create, modify, or remove connections from the existing block attributes.
 *
 * It contains the following utils:
 * - `updateBlockBindings`: Updates the value of the bindings connected to block attributes. It can be used to remove a specific binding by setting the value to `undefined`.
 * - `removeAllBlockBindings`: Removes the bindings property of the `metadata` attribute.
 *
 * @since 6.7.0 Introduced in WordPress core.
 *
 * @return {?WPBlockBindingsUtils} Object containing the block bindings utils.
 *
 * @example
 * ```js
 * import { useBlockBindingsUtils } from '@wordpress/block-editor'
 * const { updateBlockBindings, removeAllBlockBindings } = useBlockBindingsUtils();
 *
 * // Update url and alt attributes.
 * updateBlockBindings( {
 *     url: {
 *         source: 'core/post-meta',
 *         args: {
 *             key: 'url_custom_field',
 *         },
 *     },
 *     alt: {
 *         source: 'core/post-meta',
 *         args: {
 *             key: 'text_custom_field',
 *         },
 *     },
 * } );
 *
 * // Remove binding from url attribute.
 * updateBlockBindings( { url: undefined } );
 *
 * // Remove bindings from all attributes.
 * removeAllBlockBindings();
 * ```
 */
export function useBlockBindingsUtils() {
	const { clientId } = useBlockEditContext();
	const { updateBlockAttributes } = useDispatch( blockEditorStore );
	const { getBlockAttributes } = useRegistry().select( blockEditorStore );

	/**
	 * Updates the value of the bindings connected to block attributes.
	 * It removes the binding when the new value is `undefined`.
	 *
	 * @param {Object} bindings        Bindings including the attributes to update and the new object.
	 * @param {string} bindings.source The source name to connect to.
	 * @param {Object} [bindings.args] Object containing the arguments needed by the source.
	 *
	 * @example
	 * ```js
	 * import { useBlockBindingsUtils } from '@wordpress/block-editor'
	 *
	 * const { updateBlockBindings } = useBlockBindingsUtils();
	 * updateBlockBindings( {
	 *     url: {
	 *         source: 'core/post-meta',
	 *         args: {
	 *             key: 'url_custom_field',
	 *         },
	 * 	   },
	 *     alt: {
	 *         source: 'core/post-meta',
	 *         args: {
	 *             key: 'text_custom_field',
	 *         },
	 * 	   }
	 * } );
	 * ```
	 */
	const updateBlockBindings = ( bindings ) => {
		const { metadata: { bindings: currentBindings, ...metadata } = {} } =
			getBlockAttributes( clientId );
		const newBindings = { ...currentBindings };

		Object.entries( bindings ).forEach( ( [ attribute, binding ] ) => {
			if ( ! binding && newBindings[ attribute ] ) {
				delete newBindings[ attribute ];
				return;
			}
			newBindings[ attribute ] = binding;
		} );

		const newMetadata = {
			...metadata,
			bindings: newBindings,
		};

		if ( isObjectEmpty( newMetadata.bindings ) ) {
			delete newMetadata.bindings;
		}

		updateBlockAttributes( clientId, {
			metadata: isObjectEmpty( newMetadata ) ? undefined : newMetadata,
		} );
	};

	/**
	 * Removes the bindings property of the `metadata` attribute.
	 *
	 * @example
	 * ```js
	 * import { useBlockBindingsUtils } from '@wordpress/block-editor'
	 *
	 * const { removeAllBlockBindings } = useBlockBindingsUtils();
	 * removeAllBlockBindings();
	 * ```
	 */
	const removeAllBlockBindings = () => {
		const { metadata: { bindings, ...metadata } = {} } =
			getBlockAttributes( clientId );
		updateBlockAttributes( clientId, {
			metadata: isObjectEmpty( metadata ) ? undefined : metadata,
		} );
	};

	/**
	 * Component to list the fields that can be connected.
	 * This allows other sources to reuse the UI created for "Post Meta".
	 *
	 * @param {Object} props           Props needed to render the component.
	 * @param {Object} props.fields    List of fields to include in the dropdown. Each field is an object with a label and a value.
	 * @param {string} props.attribute Attribute that is being updated.
	 * @param {Object} [props.binding] Optional object containing the current binding for that attribute if exist.
	 *
	 * @example
	 * ```js
	 * import { useBlockBindingsUtils } from '@wordpress/block-editor'
	 *
	 * const { FieldsList } = useBlockBindingsUtils();
	 * registerBlockBindingsSource( {
	 *     name: 'core/custom-source',
	 *     label: 'Custom Source',
	 *     getValues: () => {},
	 *     render: ( { attribute, binding }) => {
	 *         const fields = {
	 * 		       field_1: {
	 * 			       label: 'Field 1 Label',
	 * 			       value: 'Field 1 Value',
	 * 		       },
	 * 		       field_2: {
	 * 			       label: 'Field 2 Label',
	 * 			       value: 'Field 2 Value',
	 * 		       },
	 *         };
	 *         return (
	 *             <FieldsList
	 *                 fields={ fields }
	 *                 attribute={ attribute }
	 *                 binding={ binding }
	 *             />
	 *         );
	 *     } );
	 * } );
	 * ```
	 *
	 * @return {Function} Component to list the fields that can be connected.
	 */
	const FieldsList = ( { fields, attribute, binding } ) => {
		if ( ! Object.keys( fields || {} ).length ) {
			return null;
		}

		return (
			<DropdownMenuV2.Group>
				{ Object.entries( fields ).map( ( [ key, args ] ) => (
					<DropdownMenuV2.RadioItem
						key={ key }
						onChange={ () =>
							updateBlockBindings( {
								[ attribute ]: {
									label: fields[ key ].label,
									source: 'core/post-meta',
									args: { key },
								},
							} )
						}
						name={ attribute + '-binding' }
						value={ key }
						checked={ key === binding?.args?.key }
					>
						<DropdownMenuV2.ItemLabel>
							{ args?.label }
						</DropdownMenuV2.ItemLabel>
						<DropdownMenuV2.ItemHelpText>
							{ args?.value }
						</DropdownMenuV2.ItemHelpText>
					</DropdownMenuV2.RadioItem>
				) ) }
			</DropdownMenuV2.Group>
		);
	};

	return { updateBlockBindings, removeAllBlockBindings, FieldsList };
}
