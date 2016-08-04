package com.vg.rt;

import org.stjs.javascript.annotation.Namespace;

@Namespace("ReactToolbox")
public class CardMediaProps extends Props {
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

}
