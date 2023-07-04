import { Select, theme } from "antd";

export function ThemeSelector(props: {
    onChange: (value: any) => void;
}) {

    const { onChange } = props;

    const themes = [
        {
            value: "default", label: "Default"
        },
        {
            value: "dark", label: "Dark"
        },
        {
            value: "compact", label: "Compact"
        },
    ];
    return (<Select
        placeholder="Change Theme"
        options={themes}
        onChange={onChange}
    >
    </Select>);
}