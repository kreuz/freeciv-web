/**********************************************************************
    Freeciv-web - the web version of Freeciv. http://play.freeciv.org/
    Copyright (C) 2009-2016  The Freeciv-web project

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

***********************************************************************/


/****************************************************************************
  Init the Freeciv-web WebGL renderer
****************************************************************************/
function init_webgl_renderer()
{
  // load Three.js dynamically.
  $.ajax({
    async: false,
    url: "/javascript/libs/three.min.js",
    dataType: "script"
  });

  /* Loads the two tileset definition files */
  $.ajax({
    url: "/javascript/2dcanvas/tileset_config_amplio2.js",
    dataType: "script",
    async: false
  }).fail(function() {
    console.error("Unable to load tileset config.");
  });

  $.ajax({
    url: "/javascript/2dcanvas/tileset_spec_amplio2.js",
    dataType: "script",
    async: false
  }).fail(function() {
    console.error("Unable to load tileset spec. Run Freeciv-img-extract.");
  });

  init_sprites();

}
