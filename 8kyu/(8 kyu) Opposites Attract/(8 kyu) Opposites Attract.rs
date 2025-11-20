// 1 Simple solution
fn lovefunc(flower1: u16, flower2: u16) -> bool {
    let positiveCase1 = flower1 % 2 == 0 && flower2 % 2 != 0;
    let positiveCase2 = flower1 % 2 != 0 && flower2 % 2 == 0;
    let mut result = false;

    if positiveCase1 || positiveCase2 {
        result = true;
    }
    result
}

// 2 Optimized solution
fn lovefunc_optimized(flower1: u16, flower2: u16) ->
    let positiveCase1 = flower1 % 2 == 0 && flower2 % 2 != 0;
    let positiveCase2 = flower1 % 2 != 0 && flower2 % 2 == 0;
    positiveCase1 || positiveCase2
}

// 3 Clever solution
fn lovefunc_clever(flower1: u16, flower2: u16) -> bool {
    (flower1 + flower2) % 2 != 0
}
