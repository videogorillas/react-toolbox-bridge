package com.vg.rt;

import org.stjs.javascript.annotation.STJSBridge;
import org.stjs.javascript.annotation.Template;

@STJSBridge
class Internal {
    @Template("adapter")
    public native static <T> T assign(Class<Object> o, T _instance, Object fromJson);
}
