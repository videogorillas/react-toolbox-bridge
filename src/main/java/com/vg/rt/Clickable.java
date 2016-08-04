package com.vg.rt;

import org.stjs.javascript.annotation.STJSBridge;
import org.stjs.javascript.functions.Callback0;

@STJSBridge
public class Clickable {
    /**
     * Callback called when the button is clicked.
     */
    public Callback0 onClick;
}
