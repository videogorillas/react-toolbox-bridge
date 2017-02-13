package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;
import org.stjs.javascript.dom.DOMEvent;
import org.stjs.javascript.functions.Callback1;

@Namespace("ReactToolbox")
public class CardMediaProps extends Props {
    public CardMediaProps(String key) {
        super(key);
    }
    /**
     * Forces a ('wide' 16:9) or ('square' 1:1) aspect ratio respectively.
     * Unset, the media area will have a flexible height.
     * 
     * @default ''
     */
    public String aspectRatio;
    /**
     * Usually an image/video element or a <CardTitle> component.
     */
    public Object children;
    /**
     * Sets the background color
     */
    public String color;
    /**
     * Creates a dark overlay underneath the child components.
     */
    public boolean contentOverlay;
    /**
     * Can be used instead of children. Accepts an element or a URL string.
     */
    public Object image; //?: string | __React.ReactElement<any> | __React.ReactHTMLElement<any> | __React.ClassicComponent<any, any>,
    public Callback1<DOMEvent> onClick;

    public CardMediaProps setImage(String image) {
        this.image = image;
        return this;
    }
    public CardMediaProps setColor(String color) {
        this.color = color;
        return this;
    }

    public CardMediaProps setAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    
    
}
