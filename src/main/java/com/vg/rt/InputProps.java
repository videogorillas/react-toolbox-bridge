package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback0;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class InputProps extends Props {
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
     * Callback Callback0 that is fired when components is blurred.
     */
    public Callback0 onBlur;
    /**
     * Callback Callback0 that is fired when components is focused.
     */
    public Callback0 onFocus;
    /**
     * Callback Callback0 that is fired when a key is pressed down.
     */
    public Callback0 onKeyDown;
    /**
     * Callback Callback0 that is fired when a key is pressed.
     */
    public Callback0 onKeyPress;
    /**
     * Callback Callback0 that is fired when a key is released.
     */
    public Callback0 onKeyUp;
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
    public Callback1<String> onChange;

}
