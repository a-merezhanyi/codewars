fn points(games: &[String]) -> u32 {
    let mut res = 0;

    for game in games.iter() {
        let score = game.split(":").collect::<Vec<_>>();

        if score[0] > score[1] {
          res += 3;
        } else if score[0] == score[1] {
          res += 1;
        }
    }

    return res;
}
