package com.vg.rt;

import static org.stjs.javascript.JSCollections.$map;

import org.stjs.javascript.Map;
import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolboxProps")
public class Props {
    /**
     * Sets a CSS class on the component.
     */
    public String className;
    public String id;
    /**
     * @param id the id to set
     * @return 
     */
    public <T extends Props> T setId(String id) {
        this.id = id;
        return (T) this;
    }

    /**
     * A key used to uniquely identify the element within an Array
     */
    public String key;
    public String ref;

    /**
     * Inline style
     */
    public Map<String,Object> style;

    public <T extends Props> T setStyle(Map<String, Object> style) {
        this.style = style;
        return (T) this;
    }

    public <T extends Props> T setPadding(String padding) {
        Map<String, Object> css = this.style == null ? $map() : this.style;
        css.$put("padding", padding);
        setStyle(css);
        return (T) this;
    }

    /**
     * Tooltip text APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     * 
     * @see http://react-toolbox.com/#/components/tooltip
     */
    public String tooltip;
    /**
     * Amount of time in miliseconds spent before the tooltip is visible.
     * APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     * 
     * @see http://react-toolbox.com/#/components/tooltip
     */
    public Double tooltipDelay;
    /**
     * If true, the Tooltip hides after a click in the host component. APPLIES
     * ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     * 
     * @default true
     * @see http://react-toolbox.com/#/components/tooltip
     */
    public boolean tooltipHideOnClick;

    public Props(String key) {
        this.key = key;
        this.id = key;
    }

    public <T extends Props> T setRef(String ref) {
        this.ref = ref;
        return (T) this;
    }

    public <T extends Props> T setClassName(String className) {
        this.className = className;
        return (T) this;
    }

    public <T> T toPlainObject() {
        return (T) Internal.assign(Object.class, $map(), this);
    }

}
