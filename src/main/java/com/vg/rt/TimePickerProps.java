package com.vg.rt;

import org.stjs.javascript.Date;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolboxProps")
public class TimePickerProps extends Props {
    public TimePickerProps(String key) {
        super(key);
    }

    public String label;
    /**
     * Format to display the clock. It can be 24hr or ampm.
     * 
     * @default 24hr
     */
    public String format;
    /**
     * Datetime object with currrently selected time
     */
    public Date value;
    
    public boolean readonly;

    /**
     * @param readonly the readonly to set
     * @return 
     */
    public TimePickerProps setReadonly(boolean readonly) {
        this.readonly = readonly;
        return this;
    }
    //Changeable<Date>
    public Callback1<Date> onChange;

    public TimePickerProps setValue(Date value) {
        this.value = value;
        return this;
    }

    public TimePickerProps setOnChange(Callback1<Date> onChange) {
        this.onChange = onChange;
        return this;
    }
    
    public TimePickerProps setLabel(String label) {
        this.label = label;
        return this;
    }

}
