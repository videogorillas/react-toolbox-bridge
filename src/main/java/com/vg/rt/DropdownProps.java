package com.vg.rt;

import org.stjs.javascript.Array;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;
import org.stjs.javascript.functions.Function0;

@Namespace("ReactToolbox")
public class DropdownProps extends Props {
    
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
    
    public Callback1<Object> onChange;
    public boolean disabled;

}
