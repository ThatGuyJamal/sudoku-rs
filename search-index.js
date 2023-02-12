var searchIndex = JSON.parse('{\
"sudoku":{"doc":"A Sudoku game.","t":[3,3,3,3,12,12,12,12,12,12,12,12,12,12,0,12,0,0,12,12,12,5,12,12,12,12,12,12,12,12,3,3,17,11,11,11,11,12,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,12,11,11,11,11,11,11,11,11,11,11,12,3,11,11,12,11,11,11,11,11,12,11,11,11,12,11,11,11,3,3,12,12,12,12,11,11,11,11,12,12,5,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,12,12,12,12,12,12,12,11,11,11,11,11,11],"n":["Gameboard","GameboardController","GameboardView","GameboardViewSettings","background_color","board_edge_color","board_edge_radius","border_color","cell_edge_color","cell_edge_radius","cells","completed","completed_background_color","cursor_pos","gameboard","gameboard","gameboard_controller","gameboard_view","invalid_cell_background_color","invalid_selected_cell_background_color","loaded_cell_background_color","main","position","section_edge_color","section_edge_radius","selected_cell","selected_cell_background_color","settings","size","text_color","Cell","Gameboard","SIZE","borrow","borrow","borrow_mut","borrow_mut","cells","char","clone","clone_into","completed","default","deref","deref","deref_mut","deref_mut","drop","drop","eq","eq","fmt","fmt","from","from","from_cells","init","init","into","into","invalid","load_sdm","loaded","new","set","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","validate","value","GameboardController","borrow","borrow_mut","cursor_pos","deref","deref_mut","drop","event","from","gameboard","init","into","new","selected_cell","try_from","try_into","type_id","GameboardView","GameboardViewSettings","background_color","board_edge_color","board_edge_radius","border_color","borrow","borrow","borrow_mut","borrow_mut","cell_edge_color","cell_edge_radius","color_cell","completed_background_color","deref","deref","deref_mut","deref_mut","draw","drop","drop","from","from","init","init","into","into","invalid_cell_background_color","invalid_selected_cell_background_color","loaded_cell_background_color","new","new","position","section_edge_color","section_edge_radius","selected_cell_background_color","settings","size","text_color","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["sudoku","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","sudoku::gameboard","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","sudoku::gameboard_controller","","","","","","","","","","","","","","","","","sudoku::gameboard_view","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Stores game board information.","Handles events for Sudoku game.","Stores visual information about a gameboard.","Stores gameboard view settings.","Background color.","Edge color around the whole board.","Edge radius around the whole board.","Border color.","Edge color between cells.","Edge radius between cells.","Stores the content of the cells. <code>0</code> is an empty cell.","Whether or not the puzzle is completed","Completed game background color","Stores last mouse cursor position.","Game board logic.","Stores the gameboard state.","Gameboard controller.","Gameboard view.","Invalid cell background color.","Invalid selected cell background color.","Loaded cell background color.","","Position from left-top corner.","Edge color between the 3x3 sections.","Edge radius between the 3x3 sections.","Selected cell.","Selected cell background color.","Stores gameboard view settings.","Size of gameboard along horizontal and vertical edge.","Text color.","Stores information for a single <code>Gameboard</code> cell","Stores game board information.","Size of game board.","","","","","Stores the content of the cells. <code>0</code> is an empty cell.","Gets the character at cell location.","","","Whether or not the puzzle is completed","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Build a <code>Gameboard</code> from an array of <code>Cell</code> values","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Load a new game board from the SDM file in <code>filename</code>","","Creates a new game board.","Set cell value.","","","","","","","","validate the <code>val</code> to be put into <code>ind</code>","","Handles events for Sudoku game.","","","Stores last mouse cursor position.","","","","Handles events.","Returns the argument unchanged.","Stores the gameboard state.","","Calls <code>U::from(self)</code>.","Creates a new gameboard controller.","Selected cell.","","","","Stores visual information about a gameboard.","Stores gameboard view settings.","Background color.","Edge color around the whole board.","Edge radius around the whole board.","Border color.","","","","","Edge color between cells.","Edge radius between cells.","color an individual cell in the grid","Completed game background color","","","","","Draw gameboard.","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Invalid cell background color.","Invalid selected cell background color.","Loaded cell background color.","Creates new gameboard view settings.","Creates a new gameboard view.","Position from left-top corner.","Edge color between the 3x3 sections.","Edge radius between the 3x3 sections.","Selected cell background color.","Stores gameboard view settings.","Size of gameboard along horizontal and vertical edge.","Text color.","","","","","",""],"i":[0,0,0,0,15,15,15,15,15,15,1,1,15,13,0,13,0,0,15,15,15,0,15,15,15,13,15,17,15,15,0,0,0,4,1,4,1,1,1,4,4,1,4,4,1,4,1,4,1,4,1,4,1,4,1,1,4,1,4,1,4,1,4,1,1,4,4,1,4,1,4,1,1,4,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,0,0,15,15,15,15,15,17,15,17,15,15,0,15,15,17,15,17,17,15,17,15,17,15,17,15,17,15,15,15,15,17,15,15,15,15,17,15,15,15,17,15,17,15,17],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],0,[1,[[3,[2]]]],[4,4],[[]],0,[[],4],[5],[5],[5],[5],[5],[5],[[4,4],6],[[1,1],6],[[4,7],8],[[1,7],8],[[]],[[]],[[],1],[[],5],[[],5],[[]],[[]],0,[9,1],0,[[],1],[[1,10]],[[]],[[],11],[[],11],[[],11],[[],11],[[],12],[[],12],[[1,10]],0,0,[[]],[[]],0,[5],[5],[5],[[13,14]],[[]],0,[[],5],[[]],[1,13],0,[[],11],[[],11],[[],12],0,0,0,0,0,0,[[]],[[]],[[]],[[]],0,0,[[15,16]],0,[5],[5],[5],[5],[[17,13,16]],[5],[5],[[]],[[]],[[],5],[[],5],[[]],[[]],0,0,0,[[],15],[15,17],0,0,0,0,0,0,0,[[],11],[[],11],[[],11],[[],11],[[],12],[[],12]],"p":[[3,"Gameboard"],[15,"char"],[4,"Option"],[3,"Cell"],[15,"usize"],[15,"bool"],[3,"Formatter"],[6,"Result"],[15,"str"],[15,"u8"],[4,"Result"],[3,"TypeId"],[3,"GameboardController"],[15,"f64"],[3,"GameboardViewSettings"],[3,"Context"],[3,"GameboardView"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
