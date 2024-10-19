/*! For license information please see menu-group-stories-index-story.374d5bb1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9323],{"./packages/icons/build-module/library/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"./packages/components/src/menu-group/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuGroup(props){const{children,className="",label,hideSeparator}=props,instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.A)(MenuGroup);if(!_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Children.count(children))return null;const labelId=`components-menu-group-label-${instanceId}`,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)(className,"components-menu-group",{"has-hidden-separator":hideSeparator});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classNames,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"components-menu-group__label",id:labelId,"aria-hidden":"true",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{role:"group","aria-labelledby":label?labelId:void 0,children})]})}MenuGroup.displayName="MenuGroup";const __WEBPACK_DEFAULT_EXPORT__=MenuGroup;try{MenuGroup.displayName="MenuGroup",MenuGroup.__docgenInfo={description:"`MenuGroup` wraps a series of related `MenuItem` components into a common\nsection.\n\n```jsx\nimport { MenuGroup, MenuItem } from '@wordpress/components';\n\nconst MyMenuGroup = () => (\n  <MenuGroup label=\"Settings\">\n    <MenuItem>Setting 1</MenuItem>\n    <MenuItem>Setting 2</MenuItem>\n  </MenuGroup>\n);\n```",displayName:"MenuGroup",props:{className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},hideSeparator:{defaultValue:null,description:"Hide the top border on the container.",name:"hideSeparator",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Text to be displayed as the menu group header.",name:"label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-group/index.tsx#MenuGroup"]={docgenInfo:MenuGroup.__docgenInfo,name:"MenuGroup",path:"packages/components/src/menu-group/index.tsx#MenuGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/menu-item/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_shortcut__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/shortcut/index.tsx"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/button/index.tsx"),_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedMenuItem(props,ref){let{children,info,className,icon,iconPosition="right",shortcut,isSelected,role="menuitem",suffix,...buttonProps}=props;return className=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("components-menu-item__button",className),info&&(children=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"components-menu-item__info-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"components-menu-item__item",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"components-menu-item__info",children:info})]})),icon&&"string"!=typeof icon&&(icon=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(icon,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("components-menu-items__item-icon",{"has-icon-right":"right"===iconPosition})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_3__.Ay,{ref,"aria-checked":"menuitemcheckbox"===role||"menuitemradio"===role?isSelected:void 0,role,icon:"left"===iconPosition?icon:void 0,className,...buttonProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"components-menu-item__item",children}),!suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_4__.A,{className:"components-menu-item__shortcut",shortcut}),!suffix&&icon&&"right"===iconPosition&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon}),suffix]})}UnforwardedMenuItem.displayName="UnforwardedMenuItem";const MenuItem=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedMenuItem),__WEBPACK_DEFAULT_EXPORT__=MenuItem;try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"MenuItem is a component which renders a button intended to be used in combination with the `DropdownMenu` component.\n\n```jsx\nimport { MenuItem } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItem = () => {\n\tconst [ isActive, setIsActive ] = useState( true );\n\n\treturn (\n\t\t<MenuItem\n\t\t\ticon={ isActive ? 'yes' : 'no' }\n\t\t\tisSelected={ isActive }\n\t\t\trole=\"menuitemcheckbox\"\n\t\t\tonClick={ () => setIsActive( ( state ) => ! state ) }\n\t\t>\n\t\t\tToggle\n\t\t</MenuItem>\n\t);\n};\n```",displayName:"MenuItem",props:{isDestructive:{defaultValue:null,description:"Renders a red text-based button style to indicate destructive behavior.",name:"isDestructive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},info:{defaultValue:null,description:"Text to use as description for button text.",name:"info",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"The icon to render. Supported values are: Dashicons (specified as\nstrings), functions, Component instances and `null`.",name:"icon",required:!1,type:{name:"Element"}},iconPosition:{defaultValue:null,description:"Determines where to display the provided `icon`.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isSelected:{defaultValue:null,description:'Whether or not the menu item is currently selected, `isSelected` is only taken into\naccount when the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`.',name:"isSelected",required:!1,type:{name:"boolean"}},shortcut:{defaultValue:null,description:"If shortcut is a string, it is expecting the display text. If shortcut is an object,\nit will accept the properties of `display` (string) and `ariaLabel` (string).",name:"shortcut",required:!1,type:{name:"string | { display: string; ariaLabel: string; }"}},role:{defaultValue:{value:"'menuitem'"},description:"If you need to have selectable menu items use menuitemradio for single select,\nand menuitemcheckbox for multiselect.",name:"role",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Allows for markup other than icons or shortcuts to be added to the menu item.",name:"suffix",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Human-readable label for item.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-item/index.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"packages/components/src/menu-item/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}try{menuitem.displayName="menuitem",menuitem.__docgenInfo={description:"MenuItem is a component which renders a button intended to be used in combination with the `DropdownMenu` component.\n\n```jsx\nimport { MenuItem } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItem = () => {\n\tconst [ isActive, setIsActive ] = useState( true );\n\n\treturn (\n\t\t<MenuItem\n\t\t\ticon={ isActive ? 'yes' : 'no' }\n\t\t\tisSelected={ isActive }\n\t\t\trole=\"menuitemcheckbox\"\n\t\t\tonClick={ () => setIsActive( ( state ) => ! state ) }\n\t\t>\n\t\t\tToggle\n\t\t</MenuItem>\n\t);\n};\n```",displayName:"menuitem",props:{isDestructive:{defaultValue:null,description:"Renders a red text-based button style to indicate destructive behavior.",name:"isDestructive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},info:{defaultValue:null,description:"Text to use as description for button text.",name:"info",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"The icon to render. Supported values are: Dashicons (specified as\nstrings), functions, Component instances and `null`.",name:"icon",required:!1,type:{name:"Element"}},iconPosition:{defaultValue:null,description:"Determines where to display the provided `icon`.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isSelected:{defaultValue:null,description:'Whether or not the menu item is currently selected, `isSelected` is only taken into\naccount when the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`.',name:"isSelected",required:!1,type:{name:"boolean"}},shortcut:{defaultValue:null,description:"If shortcut is a string, it is expecting the display text. If shortcut is an object,\nit will accept the properties of `display` (string) and `ariaLabel` (string).",name:"shortcut",required:!1,type:{name:"string | { display: string; ariaLabel: string; }"}},role:{defaultValue:{value:"'menuitem'"},description:"If you need to have selectable menu items use menuitemradio for single select,\nand menuitemcheckbox for multiselect.",name:"role",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Allows for markup other than icons or shortcuts to be added to the menu item.",name:"suffix",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Human-readable label for item.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-item/index.tsx#menuitem"]={docgenInfo:menuitem.__docgenInfo,name:"menuitem",path:"packages/components/src/menu-item/index.tsx#menuitem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/menu-items-choice/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icons/build-module/library/check.js"),_menu_item__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/menu-item/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function MenuItemsChoice({choices=[],onHover=noop,onSelect,value}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:choices.map((item=>{const isSelected=value===item.value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_item__WEBPACK_IMPORTED_MODULE_1__.A,{role:"menuitemradio",disabled:item.disabled,icon:isSelected?_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__.A:null,info:item.info,isSelected,shortcut:item.shortcut,className:"components-menu-items-choice",onClick:()=>{isSelected||onSelect(item.value)},onMouseEnter:()=>onHover(item.value),onMouseLeave:()=>onHover(null),"aria-label":item["aria-label"],children:item.label},item.value)}))})}const __WEBPACK_DEFAULT_EXPORT__=MenuItemsChoice;try{MenuItemsChoice.displayName="MenuItemsChoice",MenuItemsChoice.__docgenInfo={description:"`MenuItemsChoice` functions similarly to a set of `MenuItem`s, but allows the user to select one option from a set of multiple choices.\n\n\n```jsx\nimport { MenuGroup, MenuItemsChoice } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItemsChoice = () => {\n\tconst [ mode, setMode ] = useState( 'visual' );\n\tconst choices = [\n\t\t{\n\t\t\tvalue: 'visual',\n\t\t\tlabel: 'Visual editor',\n\t\t},\n\t\t{\n\t\t\tvalue: 'text',\n\t\t\tlabel: 'Code editor',\n\t\t},\n\t];\n\n\treturn (\n\t\t<MenuGroup label=\"Editor\">\n\t\t\t<MenuItemsChoice\n\t\t\t\tchoices={ choices }\n\t\t\t\tvalue={ mode }\n\t\t\t\tonSelect={ ( newMode ) => setMode( newMode ) }\n\t\t\t/>\n\t\t</MenuGroup>\n\t);\n};\n```",displayName:"MenuItemsChoice",props:{choices:{defaultValue:{value:"[]"},description:"Array of choices.",name:"choices",required:!1,type:{name:"readonly MenuItemChoice[]"}},value:{defaultValue:null,description:"Value of currently selected choice (should match a `value` property\nfrom a choice in `choices`).",name:"value",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"Callback function to be called with the selected choice when user\nselects a new choice.",name:"onSelect",required:!0,type:{name:"(value: string) => void"}},onHover:{defaultValue:{value:"() => {}"},description:"Callback function to be called with a choice when user\nhovers over a new choice (will be empty on mouse leave).",name:"onHover",required:!1,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-items-choice/index.tsx#MenuItemsChoice"]={docgenInfo:MenuItemsChoice.__docgenInfo,name:"MenuItemsChoice",path:"packages/components/src/menu-items-choice/index.tsx#MenuItemsChoice"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{Q:()=>isPlainObject})},"./node_modules/memize/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function memize(fn,options){var head,tail,size=0;function memoized(){var args,i,node=head,len=arguments.length;searchCache:for(;node;){if(node.args.length===arguments.length){for(i=0;i<len;i++)if(node.args[i]!==arguments[i]){node=node.next;continue searchCache}return node!==head&&(node===tail&&(tail=node.prev),node.prev.next=node.next,node.next&&(node.next.prev=node.prev),node.next=head,node.prev=null,head.prev=node,head=node),node.val}node=node.next}for(args=new Array(len),i=0;i<len;i++)args[i]=arguments[i];return node={args,val:fn.apply(null,args)},head?(head.prev=node,node.next=head):tail=node,size===options.maxSize?(tail=tail.prev).next=null:size++,head=node,node.val}return options=options||{},memoized.clear=function(){head=null,tail=null,size=0},memoized}__webpack_require__.d(__webpack_exports__,{A:()=>memize})},"./packages/components/src/menu-group/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithSeperator:()=>WithSeperator,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/menu-group/index.tsx"),_menu_item__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/menu-item/index.tsx"),_menu_items_choice__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/menu-items-choice/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MenuGroup",component:___WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{children:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/menu-group",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_item__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Menu Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_item__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Menu Item 2"})]});Template.displayName="Template";const Default=Template.bind({}),WithSeperator=(args=>{const[mode,setMode]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("visual");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.A,{label:"View",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_item__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Top Toolbar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_item__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Spotlight Mode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_item__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Distraction Free"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_menu_items_choice__WEBPACK_IMPORTED_MODULE_4__.A,{choices:[{value:"visual",label:"Visual editor"},{value:"text",label:"Code editor"}],value:mode,onSelect:newMode=>setMode(newMode),onHover:()=>{}})})]})}).bind({});WithSeperator.args={...Default.args,hideSeparator:!1,label:"Editor"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <MenuGroup {...args}>\n            <MenuItem>Menu Item 1</MenuItem>\n            <MenuItem>Menu Item 2</MenuItem>\n        </MenuGroup>;\n}",...Default.parameters?.docs?.source}}},WithSeperator.parameters={...WithSeperator.parameters,docs:{...WithSeperator.parameters?.docs,source:{originalSource:"args => {\n  const [mode, setMode] = useState('visual');\n  const choices = [{\n    value: 'visual',\n    label: 'Visual editor'\n  }, {\n    value: 'text',\n    label: 'Code editor'\n  }];\n  return <>\n            <MenuGroup label=\"View\">\n                <MenuItem>Top Toolbar</MenuItem>\n                <MenuItem>Spotlight Mode</MenuItem>\n                <MenuItem>Distraction Free</MenuItem>\n            </MenuGroup>\n            <MenuGroup {...args}>\n                <MenuItemsChoice choices={choices} value={mode} onSelect={(newMode: string) => setMode(newMode)} onHover={() => {}} />\n            </MenuGroup>\n        </>;\n}",...WithSeperator.parameters?.docs?.source},description:{story:"When other menu items exist above or below a MenuGroup, the group\nshould have a divider line between it and the adjacent item.",...WithSeperator.parameters?.docs?.description}}};try{WithSeperator.displayName="WithSeperator",WithSeperator.__docgenInfo={description:"When other menu items exist above or below a MenuGroup, the group\nshould have a divider line between it and the adjacent item.",displayName:"WithSeperator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-group/stories/index.story.tsx#WithSeperator"]={docgenInfo:WithSeperator.__docgenInfo,name:"WithSeperator",path:"packages/components/src/menu-group/stories/index.story.tsx#WithSeperator"})}catch(__react_docgen_typescript_loader_error){}}}]);