import { MightyWidget } from "mighty-academy-widget"


export const ButtonWidgetDemo = ({buttonText = undefined, targetUrl = undefined}) => {
    return <MightyWidget 
        partnerId="Mighty"
        theme="dark"
        percent="50%"
        targetUrl={targetUrl}
        children={
            <button style={{marginBottom: '20px'}}>{buttonText ?? 'Start Learning'}</button>
        }
    />
}