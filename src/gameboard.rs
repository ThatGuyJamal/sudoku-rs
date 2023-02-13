//! Game board logic.

// use std::fs::read_to_string;
use rand::{thread_rng, Rng};

/// Size of game board.
const SIZE: usize = 9;

/// Stores information for a single `Gameboard` cell
#[derive(Clone, Copy, Debug, Default, PartialEq)]
pub struct Cell {
    pub value: u8,
    pub loaded: bool,
    pub invalid: bool,
}

/// Stores game board information.
#[derive(Debug, PartialEq)]
pub struct Gameboard {
    /// Stores the content of the cells. `0` is an empty cell.
    pub cells: [[Cell; SIZE]; SIZE],
    /// Whether or not the puzzle is completed
    pub completed: bool,
}

impl Gameboard {
    /// Creates a new game board.
    pub fn new() -> Gameboard {
        Gameboard {
            cells: [[Cell::default(); SIZE]; SIZE],
            completed: false,
        }
    }

    /// Load a new game board from the SDM file in `filename`
    pub fn load_sdm() -> Self {
        // let data = read_to_string(filename).expect("failed to read SDM file");

        let puzzles  = [
            // Easy
            String::from("050703060007000800000816000000030000005000100730040086906000204840572093000409000"),
            String::from("302401809001000300000000000040708010780502036000090000200609003900000008800070005"),
            String::from("000823001003000400070000052300960010000102000010038006830000040002000900600789000"),
            String::from("500700032100326000000000000020070058010803040890040070000000000000654001230009005"),
            String::from("760000053020080040005000900000000000040010070603000104100304009000000000006827300"),
            String::from("140000050700200000000300204200080400080090020006050001809001000000006007050000069"),
            String::from("002009000015008760040000051620407000000010000000206074170000090098500610000700800"),
            String::from("060010030830605029000000000006030900092000570000409000285000716000000000470000095"),
            String::from("600002305000970016021000009070643000000000000000891040200000530310064000904700001"),
            String::from("007020850200516000400000006070648090930102068060953020700000005000495002029060100"),
            String::from("003700040200954800094103702039000486060000020452000390607408950005297004040005200"),
            String::from("014600380980201074200000009050108093000050000890302010300000005570403061068009230"),
            // Medium
            String::from("020900000048000031000063020009407003003080200400105600030570000250000180000006050"),
            String::from("100800570000009210090040000300900050007000300020006008000020040071400000064007003"),
            String::from("002000800005020100460000029130060052009080400000302000006070200700000008020519070"),
            String::from("802600009000058000006000401090406005020000040600203090205000900000970000100002804"),
            // Hard
            String::from("080200400570000100002300000820090005000715000700020041000006700003000018007009050"),
            String::from("600050007030000000080409200015300000008000300000007590009501030000000080200070004"),
        ];

        let puzzle = select_random_string(&puzzles);

        let mut cells = [[Cell::default(); SIZE]; SIZE];
        let mut row = 0;
        let mut col = 0;

        for c in puzzle.chars() {
            if col == SIZE {
                col = 0;
                row += 1;
            }
            let value = c.to_digit(10).unwrap() as u8;
            cells[row][col] = Cell {
                value,
                loaded: value != 0,
                invalid: false,
            };
            col += 1;
        }
        Self {
            cells,
            completed: false,
        }
    }

    /// Gets the character at cell location.
    pub fn char(&self, ind: [usize; 2]) -> Option<char> {
        Some(match self.cells[ind[1]][ind[0]].value {
            1 => '1',
            2 => '2',
            3 => '3',
            4 => '4',
            5 => '5',
            6 => '6',
            7 => '7',
            8 => '8',
            9 => '9',
            _ => return None,
        })
    }

    /// Set cell value.
    pub fn set(&mut self, ind: [usize; 2], val: u8) {
        if !self.cells[ind[1]][ind[0]].loaded {
            self.validate(ind, val);
            self.cells[ind[1]][ind[0]].value = val;
        }
        // check for puzzle completion
        self.completed = self
            .cells
            .iter()
            .flatten()
            .all(|cell| !cell.invalid && cell.value != 0);
    }

    /// validate the `val` to be put into `ind`
    fn validate(&mut self, ind: [usize; 2], val: u8) {
        let [b, a] = ind;
        if val == 0 {
            self.cells[a][b].invalid = false;
            return;
        }
        // check row
        for i in 0..SIZE {
            if i == a {
                continue;
            }
            if self.cells[a][i].value == val {
                self.cells[a][b].invalid = true;
                return;
            }
        }
        // check col
        for i in 0..SIZE {
            if i == b {
                continue;
            }
            if self.cells[i][b].value == val {
                self.cells[a][b].invalid = true;
                return;
            }
        }
        // check box
        let (row, col) = (a / 3, b / 3);
        for i in 3 * row..3 * row + 3 {
            for j in 3 * col..3 * col + 3 {
                if i == a && j == b {
                    continue;
                }
                if self.cells[i][j].value == val {
                    self.cells[a][b].invalid = true;
                    return;
                }
            }
        }
        self.cells[a][b].invalid = false;
    }

    /// Build a `Gameboard` from an array of `Cell` values
    pub fn from_cells(cells: [[u8; SIZE]; SIZE]) -> Gameboard {
        let mut ret = Gameboard::new();
        for (i, row) in cells.iter().enumerate() {
            for (j, &col) in row.iter().enumerate() {
                ret.cells[i][j] = Cell {
                    value: col,
                    loaded: col != 0,
                    invalid: false,
                };
            }
        }
        ret
    }
}

/// Select a random string from a slice
// This is used to select a random puzzle from the SDM string array
fn select_random_string(arr: &[String]) -> &String {
    let random_index = thread_rng().gen_range(0..arr.len());
    &arr[random_index]
}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn load_sdm() {
        let got = Gameboard::load_sdm();
        let want = Gameboard::from_cells([
            [0, 1, 6, 4, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 9, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 6, 2],
            [0, 7, 0, 2, 3, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 3, 0, 8, 7, 0, 4, 0],
            [9, 6, 0, 0, 0, 0, 0, 0, 5],
            [0, 0, 0, 8, 0, 0, 0, 0, 7],
            [0, 0, 0, 0, 0, 6, 8, 2, 0],
        ]);
        assert_eq!(got, want);
    }
}
