import * as React from 'react';
import '../../method-draw/images/logo.png';
import '../../method-draw/css/method-draw.compiled.css';
import '../../method-draw/lib/jquery.js';
import '../../method-draw/method-draw.compiled.js';

const styles = {
    position: {
        position: "relative" as "relative"
    }
}

class MethodDraw extends React.Component {
  public render() {
    return (
      <div className="MethodDraw">
        <div id="svg_editor">
        <div id="rulers">
        <div id="ruler_corner"/>
        <div id="ruler_x">
            <div id="ruler_x_cursor"/>
            <div>
            <canvas height="15"/>
            </div>
        </div>
        <div id="ruler_y">
            <div id="ruler_y_cursor"/>
            <div>
            <canvas width="15"/>
            </div>
        </div>
        </div>

        <div id="workarea">
        <div id="svgcanvas" style={styles.position}/>
        </div>

        <div id="menu_bar">
        <a className="menu">
            <div className="menu_title" id="logo"/>
            <div className="menu_list">
            <div id="tool_about" className="menu_item">About this Editor...</div>
            <div className="separator"/>
            <div id="tool_about" className="menu_item">Keyboard Shortcuts...</div>
            </div>
        </a>
        
        /*<div className="menu">
            <div className="menu_title">File</div>
            <div className="menu_list" id="file_menu"> 
            <div id="tool_clear" className="menu_item">New Document</div>
            <div id="tool_open" className="menu_item" style={{display: "none"}}><div id="fileinputs"/>Open SVG...</div>
            <div id="tool_import" className="menu_item" style={{display: "none"}}><div id="fileinputs_import"/>Import Image...</div>
            <div id="tool_save" className="menu_item">Save Image... <span className="shortcut">⌘S</span></div>
            <div id="tool_export" className="menu_item">Export as PNG</div>
            </div>
        </div>*/

        <div className="menu">
            <div className="menu_title">Edit</div>
            <div className="menu_list" id="edit_menu">
            <div className="menu_item" id="tool_undo">Undo <span className="shortcut">⌘Z</span></div>
            <div className="menu_item" id="tool_redo">Redo <span className="shortcut">⌘Y</span></div>
            <div className="separator"/>
            <div className="menu_item action_selected disabled" id="tool_cut">Cut <span className="shortcut">⌘X</span></div>
            <div className="menu_item action_selected disabled" id="tool_copy">Copy <span className="shortcut">⌘C</span></div>
            <div className="menu_item action_selected disabled" id="tool_paste">Paste <span className="shortcut">⌘V</span></div>
            <div className="menu_item action_selected disabled" id="tool_clone">Duplicate <span className="shortcut">⌘D</span></div>
            <div className="menu_item action_selected disabled" id="tool_delete">Delete <span>⌫</span></div>
            </div>
        </div>
        
        <div className="menu">
            <div className="menu_title">Object</div>
            <div className="menu_list"  id="object_menu">
            <div className="menu_item action_selected disabled" id="tool_move_top">Bring to Front <span className="shortcut">⌘⇧↑</span></div>
            <div className="menu_item action_selected disabled" id="tool_move_up">Bring Forward <span className="shortcut">⌘↑</span></div>
            <div className="menu_item action_selected disabled" id="tool_move_down">Send Backward <span className="shortcut">⌘↓</span></div>
            <div className="menu_item action_selected disabled" id="tool_move_bottom">Send to Back <span className="shortcut">⌘⇧↓</span></div>
            <div className="separator"/>
            <div className="menu_item action_multi_selected disabled" id="tool_group">Group Elements <span className="shortcut">⌘G</span></div>
            <div className="menu_item action_group_selected disabled" id="tool_ungroup">Ungroup Elements <span className="shortcut">⌘⇧G</span></div>
            <div className="separator"/>
            <div className="menu_item action_path_convert_selected disabled" id="tool_topath">Convert to Path</div>
            <div className="menu_item action_path_selected disabled" id="tool_reorient">Reorient path</div>
            </div>
        </div>

        <div className="menu">
            <div className="menu_title">View</div>
            <div className="menu_list" id="view_menu">
                <div className="menu_item push_button_pressed" id="tool_rulers">View Rulers</div>
                <div className="menu_item" id="tool_wireframe">View Wireframe</div>
                <div className="menu_item" id="tool_snap">Snap to Grid</div>
                <div className="separator"/>
                <div className="menu_item" id="tool_source">Source... <span className="shortcut">⌘U</span></div>
            </div>
        </div>
        

        
        </div>

        <div id="tools_top" className="tools_panel">

        <div id="canvas_panel" className="context_panel">
            
            <h4 className="clearfix">Canvas</h4>
            
            <label data-title="Change canvas width">
            <input size={3} id="canvas_width" type="text" pattern="[0-9]*" />
            <span className="icon_label">Width</span>
            </label>
            <label data-title="Change canvas height">
            <input id="canvas_height" size={3} type="text" pattern="[0-9]*" />
            <span className="icon_label">Height</span>
            </label>
                
            
            <label data-title="Change canvas color" className="draginput">
            <span>Color</span>
            <div id="color_canvas_tools">
                <div className="color_tool active" id="tool_canvas">
                <div className="color_block">
                    <div id="canvas_bg"/>
                    <div id="canvas_color"/>
                </div>
                </div>
            </div>
            </label>

            <div className="draginput">
            <span>Sizes</span>
            <select id="resolution">
                <option id="selectedPredefined" selected={true}>Custom</option>
                <option>640x480</option>
                <option>800x600</option>
                <option>1024x768</option>
                <option>1280x960</option>
                <option>1600x1200</option>
                <option id="fitToContent" value="content">Fit to Content</option>
            </select>
            <div className="caret"/>
            <label id="resolution_label">Custom</label>
            </div>

        </div>
        
        <div id="rect_panel" className="context_panel">
            <h4 className="clearfix">Rectangle</h4>
            <label>
            <input id="rect_x" className="attr_changer" data-title="Change X coordinate" size={3} data-attr="x" pattern="[0-9]*" />
            <span>X</span> 
            </label>
            <label>
            <input id="rect_y" className="attr_changer" data-title="Change Y coordinate" size={3} data-attr="y" pattern="[0-9]*" />
            <span>Y</span> 
            </label>
            <label id="rect_width_tool attr_changer" data-title="Change rectangle width">
            <input id="rect_width" className="attr_changer" size={3} data-attr="width" type="text" pattern="[0-9]*" />
            <span className="icon_label">Width</span>
            </label>
            <label id="rect_height_tool" data-title="Change rectangle height">
            <input id="rect_height" className="attr_changer" size={3} data-attr="height" type="text" pattern="[0-9]*" />
            <span className="icon_label">Height</span>
            </label>
        </div>
        
        <div id="path_panel" className="context_panel clearfix">
            <h4 className="clearfix">Path</h4>
            <label>
            <input id="path_x" className="attr_changer" data-title="Change ellipse's cx coordinate" size={3} data-attr="x" pattern="[0-9]*" />
            <span>X</span>
            </label>
            <label>
            <input id="path_y" className="attr_changer" data-title="Change ellipse's cy coordinate" size={3} data-attr="y" pattern="[0-9]*" />
            <span>Y</span>
            </label>
        </div>

        <div id="image_panel" className="context_panel clearfix">
        <h4>Image</h4>
            <label>
            <input id="image_x" className="attr_changer" data-title="Change X coordinate" size={3} data-attr="x"  pattern="[0-9]*"/>
            <span>X</span> 
            </label>
            <label>
            <input id="image_y" className="attr_changer" data-title="Change Y coordinate" size={3} data-attr="y"  pattern="[0-9]*"/>
            <span>Y</span> 
            </label>
            <label>
            <input id="image_width" className="attr_changer" data-title="Change image width" size={3} data-attr="width" pattern="[0-9]*" />
            <span className="icon_label">Width</span>
            </label>
            <label>
            <input id="image_height" className="attr_changer" data-title="Change image height" size={3} data-attr="height" pattern="[0-9]*" />
            <span className="icon_label">Height</span>
            </label>
        </div>
        
        <div id="circle_panel" className="context_panel">
            <h4>Circle</h4>
            <label id="tool_circle_cx">
            <span>Center X</span>
            <input id="circle_cx" className="attr_changer" title="Change circle's cx coordinate" size={3} data-attr="cx"/>
            </label>
            <label id="tool_circle_cy">
            <span>Center Y</span>
            <input id="circle_cy" className="attr_changer" title="Change circle's cy coordinate" size={3} data-attr="cy"/>
            </label>
            <label id="tool_circle_r">
            <span>Radius</span>
            <input id="circle_r" className="attr_changer" title="Change circle's radius" size={3} data-attr="r"/>
            </label>
        </div>

        <div id="ellipse_panel" className="context_panel clearfix">
            <h4>Ellipse</h4>
            <label id="tool_ellipse_cx">
            <input id="ellipse_cx" className="attr_changer" data-title="Change ellipse's cx coordinate" size={3} data-attr="cx" pattern="[0-9]*" />
            <span>X</span>
            </label>
            <label id="tool_ellipse_cy">
            <input id="ellipse_cy" className="attr_changer" data-title="Change ellipse's cy coordinate" size={3} data-attr="cy" pattern="[0-9]*" />
            <span>Y</span>
            </label>
            <label id="tool_ellipse_rx">
            <input id="ellipse_rx" className="attr_changer" data-title="Change ellipse's x radius" size={3} data-attr="rx" pattern="[0-9]*" />
            <span>Radius X</span>
            </label>
            <label id="tool_ellipse_ry">
            <input id="ellipse_ry" className="attr_changer" data-title="Change ellipse's y radius" size={3} data-attr="ry" pattern="[0-9]*" />
            <span>Radius Y</span>
            </label>
        </div>

        <div id="line_panel" className="context_panel clearfix">
            <h4>Line</h4>
            <label id="tool_line_x1">
            <input id="line_x1" className="attr_changer" data-title="Change line's starting x coordinate" size={3} data-attr="x1" pattern="[0-9]*" />
            <span>Start X</span>
            </label>
            <label id="tool_line_y1">
            <input id="line_y1" className="attr_changer" data-title="Change line's starting y coordinate" size={3} data-attr="y1" pattern="[0-9]*" />
            <span>Start Y</span>
            </label>
            <label id="tool_line_x2">
            <input id="line_x2" className="attr_changer" data-title="Change line's ending x coordinate" size={3} data-attr="x2"   pattern="[0-9]*" />
            <span>End X</span>
            </label>
            <label id="tool_line_y2">
            <input id="line_y2" className="attr_changer" data-title="Change line's ending y coordinate" size={3} data-attr="y2"   pattern="[0-9]*" />
            <span>End Y</span>
            </label>
        </div>

        <div id="text_panel" className="context_panel">
            <h4>Text</h4>
            <label>
            <input id="text_x" className="attr_changer" data-title="Change text x coordinate" size={3} data-attr="x" pattern="[0-9]*" />
            <span>X</span>
            </label>
            <label>
            <input id="text_y" className="attr_changer" data-title="Change text y coordinate" size={3} data-attr="y" pattern="[0-9]*" />
            <span>Y</span>
            </label>
            
            <div className="toolset draginput select twocol" id="tool_font_family">
            <span>Font</span>
            <div id="preview_font" /*style="font-family: Helvetica, Arial, sans-serif;"*/>Helvetica</div>
            <div className="caret"/>
            <input id="font_family" data-title="Change Font Family" size={12} type="hidden" />
            <select id="font_family_dropdown">
                <option value="Arvo, sans-serif">Arvo</option>
                <option value="'Courier New', Courier, monospace">Courier</option>
                <option value="Euphoria, sans-serif">Euphoria</option>
                <option value="Georgia, Times, 'Times New Roman', serif">Georgia</option>
                <option value="Helvetica, Arial, sans-serif" selected={true}>Helvetica</option>
                <option value="Junction, sans-serif">Junction</option>
                <option value="'League Gothic', sans-serif">League Gothic</option>
                <option value="Oswald, sans-serif">Oswald</option>
                <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">Palatino</option>
                <option value="'Trebuchet MS', Gadget, sans-serif">Trebuchet</option>
                <option value="'Shadows Into Light', serif">Shadows Into Light</option>
                <option value="'Simonetta', serif">Simonetta</option>
                <option value="'Times New Roman', Times, serif">Times</option>
            </select>
            <div className="tool_button" id="tool_bold" data-title="Bold Text [B]">B</div>
            <div className="tool_button" id="tool_italic" data-title="Italic Text [I]">i</div>
            </div>

            <label id="tool_font_size" data-title="Change Font Size">
            <input id="font_size" size={3} value="0" />
            <span id="font_sizeLabel" className="icon_label">Font Size</span>
            </label>
            <input id="text" type="text" size={35}/>
        </div>

        <div id="container_panel" className="context_panel clearfix"/>
        
        <div id="use_panel" className="context_panel clearfix">
            <div className="tool_button clearfix" id="tool_unlink_use" data-title="Break link to reference element (make unique)">Break link reference</div>
        </div>
        
        <div id="g_panel" className="context_panel clearfix">
            <h4>Group</h4>
            <label>
            <input id="g_x" className="attr_changer" data-title="Change groups's x coordinate" size={3} data-attr="x" pattern="[0-9]*" />
            <span>X</span>
            </label>
            <label>
            <input id="g_y" className="attr_changer" data-title="Change groups's y coordinate" size={3} data-attr="y" pattern="[0-9]*" />
            <span>Y</span>
            </label>
        </div>
        
        <div id="path_node_panel" className="context_panel clearfix">
            <h4>Edit Path</h4>

            <label id="tool_node_x">
            <input id="path_node_x" className="attr_changer" data-title="Change node's x coordinate" size={3} data-attr="x" />
            <span>X</span>
            </label>
            <label id="tool_node_y">
            <input id="path_node_y" className="attr_changer" data-title="Change node's y coordinate" size={3} data-attr="y" />
            <span>Y</span>
            </label>
            
            <div id="segment_type" className="draginput label">
            <span>Segment Type</span>
            <select id="seg_type" data-title="Change Segment type">
                <option id="straight_segments" selected={true} value="4">Straight</option>
                <option id="curve_segments" value="6">Curve</option>
            </select>
            <div className="caret"/>
            <label id="seg_type_label">Straight</label>
            </div>
            
            /*<label className="draginput checkbox" data-title="Link Control Points">
            <span>Linked Control Points</span>
            <div className="push_bottom"><input type="checkbox" id="tool_node_link" checked={true} /></div>
            </label>*/
            
            <div className="clearfix"/>
            <div className="tool_button" id="tool_node_clone" title="Adds a node">Add Node</div>
            <div className="tool_button" id="tool_node_delete" title="Delete Node">Delete Node</div>
            <div className="tool_button" id="tool_openclose_path" title="Open/close sub-path">Open Path</div>
            /*<div className="tool_button" id="tool_add_subpath" title="Add sub-path"/>*/
        </div>
        
        <div id="selected_panel" className="context_panel">

            <label id="tool_angle" data-title="Change rotation angle" className="draginput">
            <input id="angle" className="attr_changer" size={2} value="0" data-attr="transform" data-min="-180" data-max="180" type="text"/>
            <span className="icon_label">Rotation</span>
            <div id="tool_angle_indicator">
                <div id="tool_angle_indicator_cursor"/>
            </div>
            </label>
            
            <label className="toolset" id="tool_opacity" data-title="Change selected item opacity">
                <input id="group_opacity" className="attr_changer" data-attr="opacity" data-multiplier="0.01" size={3} value="100" step="5" min="0" max="100" />
                <span id="group_opacityLabel" className="icon_label">Opacity</span>
            </label>
            
            <div className="toolset" id="tool_blur" data-title="Change gaussian blur value">
            <label>
                <input id="blur" size={2} value="0" step=".1"  min="0" max="10" />
                <span className="icon_label">Blur</span>
            </label>
            </div>
            
            <label id="cornerRadiusLabel" data-title="Change Rectangle Corner Radius">
            <input id="rect_rx" size={3} value="0" data-attr="rx" className="attr_changer" type="text" pattern="[0-9]*" />
            <span className="icon_label">Roundness</span>
            </label>
            
            <div className="clearfix"/>
            <div id="align_tools">
            <h4>Align</h4>
            <div className="toolset align_buttons" id="tool_position">
                <label>
                    <div className="col last clear" id="position_opts">
                    <div className="draginput_cell" id="tool_posleft" title="Align Left"/>
                    <div className="draginput_cell" id="tool_poscenter" title="Align Center"/>
                    <div className="draginput_cell" id="tool_posright" title="Align Right"/>
                    <div className="draginput_cell" id="tool_postop" title="Align Top"/>
                    <div className="draginput_cell" id="tool_posmiddle" title="Align Middle"/>
                    <div className="draginput_cell" id="tool_posbottom" title="Align Bottom"/>
                    </div>
                </label>
            </div>    
            </div>
        </div>
        
        <div id="multiselected_panel" className="context_panel clearfix">
            <h4 className="hidable">Multiple Elements</h4>
            
            <div className="toolset align_buttons" style={{position: "relative"}}>
            <label id="tool_align_relative" style={{margin: "10 0 0 0"}}> 
                <select id="align_relative_to" title="Align relative to ...">
                <option id="selected_objects" value="selected">Align to objects</option>
                <option id="page" value="page">Align to page</option>
                </select>
            </label>
            <h4>.</h4>
                <div className="col last clear">
                <div className="draginput_cell" id="tool_alignleft" title="Align Left"/>
                <div className="draginput_cell" id="tool_aligncenter" title="Align Center"/>
                <div className="draginput_cell" id="tool_alignright" title="Align Right"/>
                <div className="draginput_cell" id="tool_aligntop" title="Align Top"/>
                <div className="draginput_cell" id="tool_alignmiddle" title="Align Middle"/>
                <div className="draginput_cell" id="tool_alignbottom" title="Align Bottom"/>
                </div>
            </div>
            <div className="clearfix"/>

        </div>
        
        <div id="stroke_panel" className="context_panel clearfix">
            <div className="clearfix"/>
            <h4>Stroke</h4>
            <div className="toolset" data-title="Change stroke">
            <label>
                <input id="stroke_width" size={2} value="5" data-attr="stroke-width" min="0" max="99" step="1" />
                <span className="icon_label">Stroke Width</span>
            </label>
            </div>
            <div className="stroke_tool draginput"> 
            <span>Stroke Dash</span>
            <select id="stroke_style" data-title="Change stroke dash style">
                <option selected={true} value="none">—</option>
                <option value="2,2">···</option>
                <option value="5,5">- -</option>
                <option value="5,2,2,2">-·-</option>
                <option value="5,2,2,2,2,2">-··-</option>
            </select>
            <div className="caret"/>
            <label id="stroke_style_label">—</label>
            </div>
            
            <label style={{display: "none"}}>
            <span className="icon_label">Stroke Join</span>
            </label>
            
            <label  style={{display: "none"}}>
            <span className="icon_label">Stroke Cap</span>
            </label>
        </div>

        </div>
        <div id="cur_context_panel"/>


        <div id="tools_left" className="tools_panel">
        <div className="tool_button" id="tool_select" title="Select Tool [V]"/>
        <div className="tool_button" id="tool_fhpath" title="Pencil Tool [P]"/>
        <div className="tool_button" id="tool_line" title="Line Tool [L]"/>
        <div className="tool_button" id="tool_rect" title="Square/Rect Tool [R]"/>
        <div className="tool_button" id="tool_ellipse" title="Ellipse/Circle Tool [C]"/>
        <div className="tool_button" id="tool_path" title="Path Tool [P]"/>
        <div className="tool_button" id="tool_text" title="Text Tool [T]"/>
        <div className="tool_button" id="tool_zoom" title="Zoom Tool [Z]"/>
        
        <div id="color_tools">
                <div id="tool_switch" title="Switch stroke and fill colors [X]"/>
                <div className="color_tool active" id="tool_fill">
                <label className="icon_label" title="Change fill color"/>
                <div className="color_block">
                    <div id="fill_bg"/>
                    <div id="fill_color" className="color_block"/>
                </div>
                </div>

                <div className="color_tool" id="tool_stroke">
                    <label className="icon_label" title="Change stroke color"/>
                <div className="color_block">
                    <div id="stroke_bg"/>
                    <div id="stroke_color" className="color_block" title="Change stroke color"/>
                </div>
                </div>
        </div>
        </div>

        <div id="tools_bottom" className="tools_panel">

        <div id="zoom_panel" className="toolset" title="Change zoom level">
            <div className="draginput select" id="zoom_label">
            <span  id="zoomLabel" className="zoom_tool icon_label"/>
            <select id="zoom_select">
                <option value="6">6%</option>
                <option value="12">12%</option>
                <option value="16">16%</option>
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100"  selected={true}>100%</option>
                <option value="150">150%</option>
                <option value="200">200%</option>
                <option value="300">300%</option>
                <option value="400">400%</option>
                <option value="600">600%</option>
                <option value="800">800%</option>
                <option value="1600">1600%</option>
            </select>
            <div className="caret"/>
            <input id="zoom" size={3} value="100%" type="text" /*readonly="readonly"*/ />
            </div>
        </div>

        <div id="tools_bottom_3">
            <div id="palette" title="Click to change fill color, shift-click to change stroke color"/>
        </div>
        </div>

        <div id="color_picker"/>

        </div>

        <div id="svg_source_editor">
        <div id="svg_source_overlay"/>
        <div id="svg_source_container">
            <div id="save_output_btns">
            <p id="copy_save_note">Copy the contents of this box into a text editor, then save the file with a .svg extension.</p>
            <button id="copy_save_done">Done</button>
            </div>
            <form>
            <textarea id="svg_source_textarea" /*spellcheck="false"*//>
            </form>
            <div id="tool_source_back" className="toolbar_button">
            <button id="tool_source_cancel" className="cancel">Cancel</button>
            <button id="tool_source_save" className="ok">Apply Changes</button>
            </div>
        </div>
        </div>

        <div id="base_unit_container">
        <select id="base_unit">
            <option value="px">Pixels</option>
            <option value="cm">Centimeters</option>
            <option value="mm">Millimeters</option>
            <option value="in">Inches</option>
            <option value="pt">Points</option>
            <option value="pc">Picas</option>
            <option value="em">Ems</option>
            <option value="ex">Exs</option>
        </select>
        </div>

        <div id="dialog_box">
        <div id="dialog_box_overlay"/>
        <div id="dialog_container">
            <div id="dialog_content"/>
            <div id="dialog_buttons"/>
        </div>
        </div>

        <ul id="cmenu_canvas" className="contextMenu">
        <li><a href="#cut">Cut <span className="shortcut">⌘X;</span></a></li>
        <li><a href="#copy">Copy<span className="shortcut">⌘C</span></a></li>
        <li><a href="#paste">Paste<span className="shortcut">⌘V</span></a></li>
        <li className="separator"><a href="#delete">Delete<span className="shortcut">⌫</span></a></li>
        <li className="separator"><a href="#group">Group<span className="shortcut">⌘G</span></a></li>
        <li><a href="#ungroup">Ungroup<span className="shortcut">⌘⇧G</span></a></li>
        <li className="separator"><a href="#move_front">Bring to Front<span className="shortcut">⌘⇧↑</span></a></li>
        <li><a href="#move_up">Bring Forward<span className="shortcut">⌘↑</span></a></li>
        <li><a href="#move_down">Send Backward<span className="shortcut">⌘↓</span></a></li>
        <li><a href="#move_back">Send to Back<span className="shortcut">⌘⇧↓</span></a></li>
        </ul>
      </div>
    );
  }
}

export default MethodDraw;
