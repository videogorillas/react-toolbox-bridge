package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback0;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class SnackbarProps extends Props {
    public SnackbarProps(String key) {
        super(key);
    }

    public String action; //Label for the action component inside the Snackbar.
    public Boolean active; //false   If true, the snackbar will be active.
    public String className;//''  Additional class name to provide custom styling.
    public Object icon; //String or Element       String key for an icon or Element which will be displayed in left side of the snackbar.
    public String label; //Text to display in the content. Required.
    public Callback1<DOMEvent> onClick; //Function        ; //Callback function that will be called when the button action is clicked.
    public Callback0 onTimeout; //Function        ; //Callback function when finish the set timeout.
    public Long timeout; //Amount of time in milliseconds after the Snackbar will be automatically hidden.
    public String type; //Indicates the action type. Can be accept, warning or cancel

    public SnackbarProps setActive(Boolean active) {
        this.active = active;
        return this;
    }
    
    

}
