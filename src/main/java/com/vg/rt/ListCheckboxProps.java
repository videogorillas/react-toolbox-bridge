package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback0;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class ListCheckboxProps extends Props {
    /**
     * Main text of the item. Required.
     */
    public String caption;
    /**
     * If true the checkbox appears checked by default.
     * @default false
     */
    public boolean checked;
    /**
     * Secondary text to display under the caption.
     */
    public String legend;
    /**
     * Name for the checkbox input item.
     */
    public String name;
    /**
     * Callback called when the input element is blurred.
     */
    public Callback0 onBlur;
    /**
     * Callback called when the input element is focused.
     */
    public Callback0 onFocus;
    
    //Conditional
    public boolean disabled;
    
    //Changeable<Boolean>
    public Callback1<Boolean> onChange;

}
