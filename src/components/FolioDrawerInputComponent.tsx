import DatePickerComponent from "./Folio Drawer Inputs/DatePickerComponent";
import FolioDrawerSelectComponent from "./Folio Drawer Inputs/FolioDrawerSelectComponent";
import FolioDrawerTextComponent from "./Folio Drawer Inputs/FolioDrawerTextComponent";
import FolioDrawerAmountComponent from "./Folio Drawer Inputs/FolioDrawerAmountComponent";

interface Props{
    label: string;
    width: string;
    type: string;
    options?: string[];
}

const inputComponent : { [key: string]: React.ComponentType<any>} = {
    DatePicker: DatePickerComponent,
    Select: FolioDrawerSelectComponent,
    Text: FolioDrawerTextComponent,
    Amount: FolioDrawerAmountComponent
}

export default function FolioDrawerInputComponent(props : Props) {
    const Component = inputComponent[props.type];
    return (
        <Component label={props.label} width={props.width} options={props.options} />
    )
}
