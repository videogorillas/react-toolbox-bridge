package com.vg.rt;

import org.stjs.javascript.functions.Callback0;
import org.stjs.javascript.functions.Callback1;

public class CheckboxProps extends Props {

    boolean checked; //false	Value for the checkbox, can be true or false.String className;	String	''	Sets a class to give customized styles to the checkbox field.
    boolean disabled;//	Boolean	false	If true, the checkbox shown as disabled and cannot be modified.
    String label; //String of node		Text label to attach next to the checkbox element.
    String name; //String	false	The name of the field to set in the input checkbox.
    Callback0 onBlur;//Function		Callback called when the checkbox is blurred.
    Callback1<Boolean> onChange;//	Function		Callback called when the checkbox value is changed.
    Callback0 onFocus;//	Function		Callback called when the checkbox is focused

    public CheckboxProps(String key) {
        super(key);
    }


    public CheckboxProps setChecked(boolean checked) {
        this.checked = checked;
        return this;
    }

    public CheckboxProps setDisabled(boolean disabled) {
        this.disabled = disabled;
        return this;
    }

    public CheckboxProps setLabel(String label) {
        this.label = label;
        return this;
    }

    public CheckboxProps setName(String name) {
        this.name = name;
        return this;
    }

    public CheckboxProps setOnBlur(Callback0 onBlur) {
        this.onBlur = onBlur;
        return this;
    }

    public CheckboxProps setOnChange(Callback1<Boolean> onChange) {
        this.onChange = onChange;
        return this;
    }

    public CheckboxProps setOnFocus(Callback0 onFocus) {
        this.onFocus = onFocus;
        return this;
    }

}
