import { Checkbox } from "antd";
import "./goalSettingTemplateStyle.scss";

export function LetterCard(props:
    {
        letter: string, description: string;
    }) {
    const { letter, description } = props;

    return <>
        <div className="smart-letter">{letter}</div>
        <div className="smart-letter-description">
            {description} <Checkbox type="checkbox" />
        </div>
    </>;

}