// Classic games
import rang6 from "assets/img/rating-card/rang6.png";
import rang5 from "assets/img/rating-card/rang5.png";
import rang4 from "assets/img/rating-card/rang4.png";
import rang3 from "assets/img/rating-card/rang3.png";
import rang2 from "assets/img/rating-card/rang2.png";
import rang1 from "assets/img/rating-card/rang1.png";
import legends from "assets/img/rating-card/legend.png";

// Music
import plast1 from "assets/img/rating-card/plast1.png";
import plast2 from "assets/img/rating-card/plast2.png";
import plast3 from "assets/img/rating-card/plast3.png";
import plast4 from "assets/img/rating-card/plast4.png";
import plast5 from "assets/img/rating-card/plast5.png";
import plast6 from "assets/img/rating-card/plast6.png";
import plast7 from "assets/img/rating-card/plast7.png";
import plast8 from "assets/img/rating-card/plast8.png";
import plast9 from "assets/img/rating-card/plast9.png";

// Stream
import ilon from "assets/img/rating-card/ilon.png";
import neviezd from "assets/img/rating-card/neviezd.png";
import chuck from "assets/img/rating-card/chuck.png";
import rambo from "assets/img/rating-card/rambo.png";
import marshal from "assets/img/rating-card/marshal.png";
import general from "assets/img/rating-card/general.png";
import lieutenant from "assets/img/rating-card/lieutenant.png";
import sergeant from "assets/img/rating-card/sergeant.png";

// Teens
import lvl10 from "assets/img/rating-card/10lvl.png";
import lvl9 from "assets/img/rating-card/9lvl.png";
import lvl8 from "assets/img/rating-card/8lvl.png";
import lvl7 from "assets/img/rating-card/7lvl.png";
import lvl6 from "assets/img/rating-card/6lvl.png";
import lvl5 from "assets/img/rating-card/5lvl.png";
import lvl4 from "assets/img/rating-card/4lvl.png";
import lvl3 from "assets/img/rating-card/3lvl.png";
import lvl2 from "assets/img/rating-card/2lvl.png";
import lvl1 from "assets/img/rating-card/1lvl.png";

// oscars
import oscar1 from "assets/img/rating-card/oskars/1.png";
import oscar2 from "assets/img/rating-card/oskars/2.png";
import oscar3 from "assets/img/rating-card/oskars/3.png";
import oscar4 from "assets/img/rating-card/oskars/4.png";
import oscar5 from "assets/img/rating-card/oskars/5.png";
import oscar6 from "assets/img/rating-card/oskars/6.png";
import oscar7 from "assets/img/rating-card/oskars/7.png";
import oscar8 from "assets/img/rating-card/oskars/8.png";
import oscar9 from "assets/img/rating-card/oskars/9.png";
import oscar10 from "assets/img/rating-card/oskars/10.png";
import oscar11 from "assets/img/rating-card/oskars/11.png";
import oscar12 from "assets/img/rating-card/oskars/12.png";
import oscar13 from "assets/img/rating-card/oskars/13.png";
import oscar14 from "assets/img/rating-card/oskars/14.png";
import oscar15 from "assets/img/rating-card/oskars/15.png";
import oscar16 from "assets/img/rating-card/oskars/16.png";
import oscar17 from "assets/img/rating-card/oskars/17.png";
import oscar18 from "assets/img/rating-card/oskars/18.png";
import oscar19 from "assets/img/rating-card/oskars/19.png";
import oscar20 from "assets/img/rating-card/oskars/20.png";
import oscar21 from "assets/img/rating-card/oskars/21.png";
import oscar22 from "assets/img/rating-card/oskars/22.png";
import oscar23 from "assets/img/rating-card/oskars/23.png";
import oscar24 from "assets/img/rating-card/oskars/24.png";
import oscar25 from "assets/img/rating-card/oskars/25.png";
import oscar26 from "assets/img/rating-card/oskars/26.png";
import oscar27 from "assets/img/rating-card/oskars/27.png";
import oscar28 from "assets/img/rating-card/oskars/28.png";
import oscar29 from "assets/img/rating-card/oskars/29.png";
import oscar30 from "assets/img/rating-card/oskars/30.png";
import oscarnew from "assets/img/rating-card/oscar-new.png";

// teens rang
import level_1 from "assets/img/rating-card/teens/1.png";
import level_2 from "assets/img/rating-card/teens/2.png";
import level_3 from "assets/img/rating-card/teens/3.png";
import level_4 from "assets/img/rating-card/teens/4.png";
import level_5 from "assets/img/rating-card/teens/5.png";
import level_6 from "assets/img/rating-card/teens/6.png";
import level_7 from "assets/img/rating-card/teens/7.png";
import level_8 from "assets/img/rating-card/teens/8.png";
import level_9 from "assets/img/rating-card/teens/9.png";
import level_10 from "assets/img/rating-card/teens/10.png";
import level_11 from "assets/img/rating-card/teens/11.png";
import level_12 from "assets/img/rating-card/teens/12.png";
import level_13 from "assets/img/rating-card/teens/13.png";
import level_14 from "assets/img/rating-card/teens/14.png";
import level_15 from "assets/img/rating-card/teens/15.png";
import level_16 from "assets/img/rating-card/teens/16.png";
import level_17 from "assets/img/rating-card/teens/17.png";
import level_18 from "assets/img/rating-card/teens/18.png";
import level_19 from "assets/img/rating-card/teens/19.png";
import level_20 from "assets/img/rating-card/teens/20.png";

export default function useRatingImage(slug) {
  const imagesData = {
    legends,
    unattainable: rang6,
    chuck: rang5,
    rambo: rang4,
    general: rang3,
    lieutenant: rang2,
    sergeant: rang1,
    gold_3: plast6,
    gold_2: plast5,
    gold_1: plast4,
    vinyl_3: plast3,
    vinyl_2: plast2,
    vinyl_1: plast1,
    oscar: plast9,
    oscarnew,
    brilliant: plast8,
    platinum: plast7,

    stream_marshal: marshal,
    stream_general: general,
    stream_lieutenant: lieutenant,
    stream_sergeant: sergeant,
    stream_elon: ilon,
    stream_absentee: neviezd,
    stream_chuck: chuck,
    stream_rambo: rambo,

    "rang-level_1": level_1,
    "rang-level_2": level_2,
    "rang-level_3": level_3,
    "rang-level_4": level_4,
    "rang-level_5": level_5,
    "rang-level_6": level_6,
    "rang-level_7": level_7,
    "rang-level_8": level_8,
    "rang-level_9": level_9,
    "rang-level_10": level_10,
    "rang-level_11": level_11,
    "rang-level_12": level_12,
    "rang-level_13": level_13,
    "rang-level_14": level_14,
    "rang-level_15": level_15,
    "rang-level_16": level_16,
    "rang-level_17": level_17,
    "rang-level_18": level_18,
    "rang-level_19": level_19,
    "rang-level_20": level_20,

    oscar1,
    oscar2,
    oscar3,
    oscar4,
    oscar5,
    oscar6,
    oscar7,
    oscar8,
    oscar9,
    oscar10,
    oscar11,
    oscar12,
    oscar13,
    oscar14,
    oscar15,
    oscar16,
    oscar17,
    oscar18,
    oscar19,
    oscar20,
    oscar21,
    oscar22,
    oscar23,
    oscar24,
    oscar25,
    oscar26,
    oscar27,
    oscar28,
    oscar29,
    oscar30,

    level_1,
    level_2,
    level_3,
    level_4,
    level_5,
    level_6,
    level_7,
    level_8,
    level_9,
    level_10,
    level_11,
    level_12,
    level_13,
    level_14,
    level_15,
    level_16,
    level_17,
    level_18,
    level_19,
    level_20,
  };

  return imagesData[slug] ?? "";
}
