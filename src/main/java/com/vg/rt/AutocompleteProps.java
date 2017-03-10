package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class AutocompleteProps extends Props {
    public AutocompleteProps(String key) {
        super(key);
    }

    /**
     * Sets the error string for the internal input element.
     */
    public String error;
    /**
     * The text string to use for the floating label element.
     */
    public String label;
    /**
     * If true, component can hold multiple values.
     * 
     * @default true
     */
    public boolean multiple;
    /**
     * Object of key/values or array representing all items suggested.
     */
    public Object source;
    /**
     * If true, the list of suggestions will not be filtered when a value is
     * selected, until the query is modified.
     * 
     * @default false
     */
    public boolean showSuggestionsWhenValueIsSet;
    /**
     * Type of the input element. It can be a valid HTML5 input type
     * 
     * @default text
     */
    public String type;
    /**
     * Value or array of values currently selected component.Current value of
     * the input element.
     */
    public Object value;

    public String className; //''  Sets a class to style of the Component.
    public String direction; //auto    Determines the opening direction. It can be auto, top or bottom.
    public boolean disabled;//Bool    //false   If true, component will be disabled.
    public Callback1 onChange; //      Callback function that is fired when the components's value changes.
    public Callback1 onKeyPress; //      Callback function that is fired when the components's value changes.
    public String selectedPosition; //above   Determines if the selected list is shown above or below input. It can be above or below.
    public String suggestionMatch; //start   //Determines how suggestions are supplied. It can be start (query matches the start of a suggestion), anywhere (query matches anywhere inside the suggestion), or word (query matches the start of a word in the suggestion).
    public String hint;

    public AutocompleteProps setLabel(String label) {
        this.label = label;
        return this;
    }

    public AutocompleteProps setMultiple(boolean multiple) {
        this.multiple = multiple;
        return this;
    }

    public AutocompleteProps setHint(String hint) {
        this.hint = hint;
        return this;
    }

    public AutocompleteProps setSource(Object source) {
        this.source = source;
        return this;
    }

    public AutocompleteProps setOnChange(Callback1 onChange) {
        this.onChange = onChange;
        return this;
    }

    public AutocompleteProps setOnKeyPress(Callback1 onKeyPress) {
        this.onKeyPress = onKeyPress;
        return this;
    }

    public AutocompleteProps setValue(Object value) {
        this.value = value;
        return this;
    }
}
