package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.dom.Node;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class ChipProps extends Props {
    public ChipProps(String key) {
        super(key);
    }
    
    /** Child components, usually Avatar and inline elements. */
    
    public Node children;

    /** Additional class name to provide custom styling.	
     * @default ''
     */

    public String className;

    /** If true, the chip will be rendered with a delete icon.
     * 
     * @default false
     */
    public boolean deletable;

    /** Callback to be invoked when the delete icon is clicked.
     * 
     */
    public Callback1<DOMEvent> onDeleteClick;

    public ChipProps setOnDeleteClick(Callback1<DOMEvent> onDeleteClick) {
        this.onDeleteClick = onDeleteClick;
        return this;
    }

    public ChipProps setDeletable(boolean deletable) {
        this.deletable = deletable;
        return this;
    }
    
}