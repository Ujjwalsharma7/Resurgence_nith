import React from "react";
import "./HorizontalLine.css";

export default function HorizontalLine() {
    return (
        <>
            <div className="line">
                <div class="garnish_wrapper">
                    <div class="garnish short"></div>
                    <div class="garnish short"></div>
                    <div class="garnish long"></div>
                </div>

                <div class="left_line"></div>
                <div class="angled_wrapper">
                    <div class="angled"></div>
                </div>
                <div class="right_line"></div>
            </div>
        </>
    );
}
