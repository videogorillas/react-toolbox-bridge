package com.vg.rt;

import org.stjs.javascript.Array;
import org.stjs.javascript.Map;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;
import org.stjs.javascript.functions.Callback3;

@Namespace("ReactToolbox")
public class TableProps<T> extends Props {
    public TableProps(String key) {
        super(key);
    }
    public boolean selectable;
    public boolean multiSelectable;

    /**
     * If true, component will show a heading using model field names.
     */
    public boolean heading;
    /**
     * Object describing the data model that represents each object in the
     * source.
     */
    public Map<String, Type> model;
    /**
     * Callback function that is fired when an item in a row changes. If set,
     * rows are editable.
     */
    public Callback3<Integer, Integer, Object> onChange;
    /**
     * Callback function invoked when the row selection changes.
     */
    public Callback1<Array<Integer>> onSelect;
    /**
     * Array of indexes of the items in the source that should appear as
     * selected.
     */
    public Array<Integer> selected;
    /**
     * Array of objects representing each item to show.
     */
    public Array<T> source;

}
