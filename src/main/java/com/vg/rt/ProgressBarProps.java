package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class ProgressBarProps extends Props {
    public ProgressBarProps(String key) {
        super(key);
    }

    /** Value of a secondary progress bar useful for buffering. */
    public Number buffer;//0   

    /** Maximum value permitted. */
    public Number max;//100 

    /** Minimum value permitted. */
    public Number min;// 0   

    /** Mode of the progress bar, it can be determinate or indeterminate. */
    public String mode;// indeterminate  

    /** If true, the circular progress bar will be changing its color. */
    public Boolean multicolor; //false   

    /** Type of the progress bar, it can be circular or linear. */
    public String type;//linear  

    /** Value of the current progress. */
    public Number value;//0   

    public ProgressBarProps setType(String type) {
        this.type = type;
        return this;
    }

    public ProgressBarProps setMulticolor(boolean multicolor) {
        this.multicolor = multicolor;
        return this;
    }

    public static final String LINEAR = "linear";
    public static final String CIRCULAR = "circular";

}
