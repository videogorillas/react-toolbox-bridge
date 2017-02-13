package com.vg.rt;

import org.stjs.javascript.Date;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;
import org.stjs.javascript.functions.Function1;

@Namespace("ReactToolbox")
public class DatePickerProps extends Props {
    public DatePickerProps(String key) {
        super(key);
    }

    public String label;

    /**
     * Date object with the maximum selectable date.
     */
    public Date maxDate;
    /**
     * Date object with the minimum selectable date.
     */
    public Date minDate;
    /**
     * The text string to use like a input placeholder.
     */
    public String placeholder;
    /**
     * Date object with the currently selected date.
     */
    public Date value;

    public Callback1<Date> onChange;
    
    public boolean readonly;

    /**
     * @param readonly the readonly to set
     * @return 
     */
    public DatePickerProps setReadonly(boolean readonly) {
        this.readonly = readonly;
        return this;
    }

    /** Function to format the date displayed on the input. */
    public Function1<Date, String> inputFormat;

    public DatePickerProps setLabel(String label) {
        this.label = label;
        return this;
    }

    public DatePickerProps setMinDate(Date minDate) {
        this.minDate = minDate;
        return this;
    }

    public DatePickerProps setValue(Date value) {
        this.value = value;
        return this;
    }

    public DatePickerProps setOnChange(Callback1<Date> onChange) {
        this.onChange = onChange;
        return this;
    }

}
