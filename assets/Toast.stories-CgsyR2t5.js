import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{c as p,d as c,e as m}from"./index-CpPLN0pn.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,g=new Intl.DateTimeFormat("pt-BR",{dateStyle:"full",timeStyle:"short"}).format(new Date),A={title:"Overlay/Toast",component:p,tags:["autodocs"],args:{open:!1,title:"Agendamento realizado",description:g}},n=({...d})=>{const[{open:i},t]=l(),o=()=>t({open:!i});return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(),t({open:!0})},children:"Add event"}),e.jsx(m,{children:e.jsx(p,{onOpenChange:o,...d})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Primary"};var r,s,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
  ...args
}: ToastProps) => {
  const [{
    open
  }, updateArgs] = useArgs();
  const handleOpenChange = () => updateArgs({
    open: !open
  });
  return <>
      <Button onClick={() => {
      handleOpenChange();
      updateArgs({
        open: true
      });
    }}>
        Add event
      </Button>
      <ToastProvider>
        <Toast onOpenChange={handleOpenChange} {...args} />
      </ToastProvider>
    </>;
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const P=["Primary"];export{n as Primary,P as __namedExportsOrder,A as default};
