package com.vg.rt;

import org.stjs.javascript.Date;
import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class TimePickerProps extends Props {
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

    //Changeable<Date>
    public Callback1<Date> onChange;

}
