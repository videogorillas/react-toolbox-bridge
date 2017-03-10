package com.vg.rt;

import org.stjs.javascript.Array;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;
import org.stjs.javascript.functions.Function0;

@Namespace("ReactToolboxProps")
public class DropdownProps extends Props {

    private String error;

    public DropdownProps(String key) {
        super(key);
    }
    /**
     * If true, the dropdown will open up or down depending on the position in
     * the screen.
     */
    public boolean auto;
    /**
     * The text string to use for the floating label element.
     */
    public String label;
    /**
     * Array of data objects with the data to represent in the dropdown.
     */
    public Array<Option<?>> source;
    /**
     * Callback function that returns a JSX template to represent the element.
     */
    public Function0<String> template;
    /**
     * Default value using JSON data.
     */
    public String value;
    
    public Callback1<String> onChange;

    public boolean disabled;

    public DropdownProps setOnChange(Callback1<String> onChange) {
        this.onChange = onChange;
        return this;
    }

    public DropdownProps setSource(Array<Option<?>> source) {
        this.source = source;
        return this;
    }

    public <T extends DropdownProps>T setValue(String value) {
        this.value = value;
        return (T) this;
    }

    public DropdownProps setLabel(String label) {
        this.label = label;
        return this;
    }

    public DropdownProps setError(String error) {
        this.error = error;
        return this;
    }

    public <T extends Props> T setDisabled(boolean disabled) {
        this.disabled = disabled;
        return (T) this;
    }

    public DropdownProps setAuto(boolean auto) {
        this.auto = auto;
        return this;
    }
}
