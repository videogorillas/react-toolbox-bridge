package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class Option<T> {
    public String label;
    public T value;

    public Option(String label, T value) {
        this.label = label;
        this.value = value;
    }

    public static Option<String> opt(String label, String value) {
        return new Option<>(label, value);
    }
}
