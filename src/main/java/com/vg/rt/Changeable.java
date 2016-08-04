package com.vg.rt;

import org.stjs.javascript.annotation.STJSBridge;
import org.stjs.javascript.functions.Callback1;

@STJSBridge
public class Changeable<T> {
    /**
     * Callback called when the picker value is changed.
     * 
     * @param v
     *            Type of the value
     */
    public Callback1<T> onChange;

}
