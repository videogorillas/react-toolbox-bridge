package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class InputProps extends Props {
    public InputProps(String key) {
        super(key);
    }
    public String hint;
    public String name;

    /**
     * Give an error string to display under the field.
     */
    public String error;
    /**
     * Indicates if the label is floating in the input field or not.
     *
     * @default true
     */
    public boolean floating;
    /**
     * The text string to use for the floating label element.
     */
    public String label;
    /**
     * Specifies the maximum number of characters allowed in the component.
     */
    public Double maxLength;
    /**
     * If true, a textarea element will be rendered. The textarea also grows and
     * shrinks according to the number of lines.
     *
     * @default false
     */
    public boolean multiline;
    /**
     * Callback Callback1 that is fired when components is blurred.
     */
    public Callback1<DOMEvent> onBlur;
    /**
     * Callback Callback0 that is fired when components is focused.
     */
    public Callback1<DOMEvent> onFocus;
    /**
     * Callback Callback0 that is fired when a key is pressed down.
     */
    public Callback1<DOMEvent> onKeyDown;
    /**
     * Callback Callback0 that is fired when a key is pressed.
     */
    public Callback1<DOMEvent> onKeyPress;
    /**
     * Callback Callback0 that is fired when a key is released.
     */
    public Callback1<DOMEvent> onKeyUp;
    /**
     * Callback Callback1 that is fired when input starts.
     */
    public Callback1<DOMEvent> onInput;
    /**
     * If true, the html input has a required value.
     *
     * @default false
     */
    public boolean required;
    /**
     * Type of the input element. It can be a valid HTML5 input type
     *
     * @default text
     */
    public String type;
    /**
     * Current value of the input element.
     */
    public String value;

    public boolean disabled;
    public Object icon; //?: string | __React.ReactElement<any> | __React.ReactHTMLElement<any>,
    
    public InputProps setIcon(Object icon) {
        this.icon = icon;
        return this;
    }
    public Callback1<String> onChange;

    public InputProps setLabel(String label) {
        this.label = label;
        return this;
    }

    public InputProps setOnChange(Callback1<String> onChange) {
        this.onChange = onChange;
        return this;
    }

    public InputProps setOnKeyPress(Callback1<DOMEvent> onKeyPress) {
        this.onKeyPress = onKeyPress;
        return this;
    }

    public InputProps setRequired(boolean required) {
        this.required = required;
        return this;
    }

    public InputProps setValue(String value) {
        this.value = value;
        return this;
    }

    public InputProps setType(String type) {
        this.type = type;
        return this;
    }

    public InputProps setName(String name) {
        this.name = name;
        return this;
    }

    public InputProps setDisabled(boolean disabled) {
        this.disabled = disabled;
        return this;
    }

    public InputProps setError(String error) {
        this.error = error;
        return this;
    }
    
    public InputProps setOnKeyDown(Callback1<DOMEvent> onKeyDown) {
        this.onKeyDown = onKeyDown;
        return this;
    }
    
    public InputProps setOnFocus(Callback1<DOMEvent> event){
        this.onFocus = event;
        return this;
    }
    
    public String placeholder;

}
