import React, { Component } from "react";

class MainLeft extends Component {
  render() {
    return (
      <div className="main_left">
        <div className="Gender">
          <div className="gioitinh_span_main_sanpham">
            <span>Gender</span>
          </div>
          <div>
            <div className="checkbox_loc">
              <div className="checkbox_main_sanpham">
                <input type="checkbox" />
              </div>
              <div className="span_main_sanpham">
                <span>Men</span>
              </div>
            </div>
            <div className="checkbox_loc">
              <div className="checkbox_main_sanpham">
                <input type="checkbox" />
              </div>
              <div className="span_main_sanpham">
                <span> Women</span>
              </div>
            </div>
            <div className="checkbox_loc">
              <div className="checkbox_main_sanpham">
                <input type="checkbox" />
              </div>
              <div className="span_main_sanpham">
                <span>Kids</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Kids_Gender">
          <div className="gioitinh_span_main_sanpham">
            <span>Kids Gender</span>
          </div>

          <div>
            <div className="checkbox_loc">
              <div className="checkbox_main_sanpham">
                <input type="checkbox" />
              </div>
              <div className="span_main_sanpham">
                <span>Boys</span>
              </div>
            </div>
            <div className="checkbox_loc">
              <div className="checkbox_main_sanpham">
                <input type="checkbox" />
              </div>
              <div className="span_main_sanpham">
                <span>Girls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLeft;
