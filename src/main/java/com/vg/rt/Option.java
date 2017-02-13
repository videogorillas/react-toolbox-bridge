package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.annotation.Native;

@Namespace("ReactToolbox")
public class Option<T> {
    public String label;
    public T value;

    public Option(String label, T value) {
        this.label = label;
        this.value = value;
    }

    @Native
    public static Option<String> opt(String label) {
        return opt(label, label);
    }
    
    public static Option<String> opt(String label, String value) {
        if (value == null) {
            value = label;
        }
        return new Option<>(label, value);
    }
}
