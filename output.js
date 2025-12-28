//Sun Dec 28 2025 14:56:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const _0x763ec9 = require("axios"),
  _0x24bc63 = 20,
  _0x19430d = new Date("2035-09-15T10:05:49Z");
function _0x47e8fc() {
  const _0x1af29c = new Date();
  return _0x1af29c > _0x19430d;
}
function _0x3f73ef(_0x167e16) {
  const _0x388879 = _0x167e16?.["qishui_label_info"]?.["only_vip_playable"] === true ? " 【VIP】" : "";
  return {
    "id": _0x167e16.item_id,
    "title": _0x167e16.title + _0x388879,
    "artist": _0x167e16.author_info.name,
    "artwork": _0x167e16.cover_url
  };
}
function _0x16a38d(_0x5d9c67) {
  const _0xbcae89 = _0x5d9c67?.["track"]?.["label_info"]?.["only_vip_playable"] === true ? " 【VIP】" : "",
    _0x2853ad = _0x5d9c67.track.album.url_cover.uri,
    _0xc3e6f1 = _0x5d9c67.track.album.url_cover.template_prefix;
  return {
    "id": _0x5d9c67.track.id,
    "title": _0x5d9c67.track.name + _0xbcae89,
    "artist": _0x5d9c67.track.artists[0].name,
    "artistId": _0x5d9c67.track.artists[0].id,
    "album": _0x5d9c67.track.album.name,
    "albumId": _0x5d9c67.track.album.id,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x2853ad + "~" + _0xc3e6f1 + "-resize:960:960.png"
  };
}
function _0x49565e(_0x5b7816) {
  const _0xfe24c4 = _0x5b7816?.["label_info"]?.["only_vip_playable"] === true ? " 【VIP】" : "",
    _0x1f70b4 = _0x5b7816.album.url_cover.uri,
    _0x19277a = _0x5b7816.album.url_cover.template_prefix;
  return {
    "id": _0x5b7816.id,
    "title": _0x5b7816.name + _0xfe24c4,
    "artist": _0x5b7816.artists[0].name,
    "artistId": _0x5b7816.artists[0].id,
    "album": _0x5b7816.album.name,
    "albumId": _0x5b7816.album.id,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x1f70b4 + "~" + _0x19277a + "-resize:960:960.png"
  };
}
function _0x16803b(_0x1f38af) {
  const _0x57c539 = _0x1f38af?.["entity"]?.["track_wrapper"]?.["track"]?.["label_info"]?.["only_vip_playable"] === true ? " 【VIP】" : "",
    _0x4f925b = _0x1f38af.entity.track_wrapper.track.album.url_cover.uri,
    _0x412208 = _0x1f38af.entity.track_wrapper.track.album.url_cover.template_prefix;
  return {
    "id": _0x1f38af.entity.track_wrapper.track.id,
    "title": _0x1f38af.entity.track_wrapper.track.name + _0x57c539,
    "artist": _0x1f38af.entity.track_wrapper.track.artists[0].name,
    "artistId": _0x1f38af.entity.track_wrapper.track.artists[0].id,
    "album": _0x1f38af.entity.track_wrapper.track.album.name,
    "albumId": _0x1f38af.entity.track_wrapper.track.album.id,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x4f925b + "~" + _0x412208 + "-resize:960:960.png"
  };
}
function _0x28e674(_0x3784fa) {
  const _0x21a73c = _0x3784fa?.["resources"][0]?.["entity"]?.["playlist"]?.["label_info"]?.["only_vip_playable"] === true ? " 【VIP】" : "",
    _0x17ddc0 = _0x3784fa.resources[0].entity.playlist.url_cover.uri,
    _0x24755f = _0x3784fa.resources[0].entity.playlist.url_cover.template_prefix;
  return {
    "id": _0x3784fa.resources[0].entity.playlist.id,
    "title": _0x3784fa.resources[0].entity.playlist.title + _0x21a73c,
    "artist": _0x3784fa.resources[0].entity.playlist.owner.nickname,
    "createUserId": _0x3784fa.resources[0].entity.playlist.owner.id,
    "description": _0x3784fa.resources[0].entity.playlist.desc,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x17ddc0 + "~" + _0x24755f + "-resize:960:960.png",
    "createTime": _0x3784fa.resources[0].entity.playlist.create_time
  };
}
function _0x5f5bca(_0x499aea) {
  const _0x485fc5 = new Date(_0x499aea.time_created);
  return {
    "id": _0x499aea.id,
    "nickName": _0x499aea.user.nickname,
    "avatar": _0x499aea.user.medium_avatar_url && _0x499aea.user.medium_avatar_url.urls[0],
    "comment": _0x499aea.content,
    "like": _0x499aea.count_digged,
    "createAt": _0x485fc5.toLocaleString()
  };
}
const _0x457aa7 = {
  "Accept": "*/*",
  "Content-Type": "application/json; charset=UTF-8",
  "User-Agent": "com.luna.music/100159040 (Linux; U; Android 11; zh_CN; Cronet/TTNetVersion:dd1b0931 2024-06-28 QuicVersion:d299248d 2024-04-09)",
  "X-Argus": "=",
  "x-common-params-v2": "channel=appstore&aid=8478&device_id=1100210274091033"
};
async function _0x58e6db(_0x2884b3, _0x38f01c) {
  if (_0x47e8fc()) {
    return;
  }
  const _0x16bb25 = (_0x38f01c - 1) * _0x24bc63,
    _0xb1c311 = (await _0x763ec9.default.get("https://api-vehicle.volcengine.com/v2/search/type", {
      "params": {
        "keyword": _0x2884b3,
        "search_type": "music",
        "limit": _0x24bc63,
        "real_offset": _0x16bb25,
        "search_source": "qishui"
      }
    })).data,
    _0x573f97 = _0xb1c311.data.list.map(_0x3f73ef);
  return {
    "isEnd": _0xb1c311.data.list.length === 0 || _0xb1c311.data.list.length < _0x24bc63 ? true : false,
    "data": _0x573f97
  };
}
async function _0x86473c(_0x43dca9) {
  if (_0x47e8fc()) return;
  const _0x2acb4a = (await _0x763ec9.default.get("https://api-vehicle.volcengine.com/v2/custom/contents", {
    "params": {
      "sources": "qishui",
      "need_author": true,
      "need_album": true,
      "need_ugc": true,
      "need_stat": true,
      "item_ids": _0x43dca9.id
    }
  })).data;
  return {
    "artwork": _0x2acb4a.data.list[0].cover_url,
    "rawLrc": _0x2acb4a.data.list[0].lyric_info.lyric_text
  };
}
async function _0x49e305(_0x1214a0, _0x3e5938) {
  const _0x49f1a6 = "https://beta-luna.douyin.com/luna/h5/seo_track?track_id=" + _0x1214a0.id + "&device_platform=web",
    _0x2d6a1c = (await _0x763ec9.default.get(_0x49f1a6)).data;
  try {
    const _0x1e69ff = (await _0x763ec9.default.get(_0x2d6a1c.track_player.url_player_info)).data,
      _0x22ec68 = _0x1e69ff.Result.Data.PlayInfoList,
      _0x247e36 = _0x22ec68[_0x22ec68.length - 1],
      _0x58af55 = _0x247e36.MainPlayUrl;
    return {
      "url": _0x58af55.replace("audio_mp4", "audio_mp3"),
      "headers": {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Range": "bytes=0-",
        "Referer": "https://www.douyin.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      }
    };
  } catch (_0x353baf) {
    console.warn("播放异常", _0x353baf);
    return {
      "url": ""
    };
  }
}
async function _0x5d79f5() {
  return [{
    "title": "默认排行榜",
    "data": [{
      "id": "7036274230471712007",
      "description": "汽水音乐内每周热度最高的50首歌，每周四更新",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-i-b829550vbb/d0d8d48461a62748e84689cdf049b19a.png~tplv-b829550vbb-resize:960:960.png",
      "title": "热歌榜"
    }, {
      "id": "7060812597884869927",
      "description": "近期发行的热度最高的50首新歌，每周四更新",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-i-b829550vbb/f12f7eb5b54d0899c7c724df009668a8.png~tplv-b829550vbb-resize:960:960.png",
      "title": "新歌榜"
    }, {
      "id": "7061475546400005410",
      "description": "汽水音乐内每周热度最高的50首外文歌曲，每周四更新",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-i-b829550vbb/33747550ed5499b58feda42a21748637.png~tplv-b829550vbb-resize:960:960.png",
      "title": "欧美榜"
    }, {
      "id": "7415959718721494311",
      "description": "抖音音乐人开放平台上传歌曲，综合每周站内热度进行排序展示",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-v-2774c002/o8FQKiQQBxHWa2hzsBNAgYOX6iEHEAibADAbfB~tplv-b829550vbb-resize:960:960.png",
      "title": "音乐人歌曲榜"
    }]
  }];
}
async function _0x71761d(_0xac89b1, _0x3b2135 = 1) {
  if (_0x47e8fc()) return;
  const _0x2dc1b6 = (await _0x763ec9.default.get("https://api5-lf.qishui.com/luna/charts/" + _0xac89b1.id + "?charge=0", {
    "headers": _0x457aa7
  })).data;
  return Object.assign(Object.assign({}, _0xac89b1), {
    "musicList": _0x2dc1b6.chart.track_ranks.map(_0x16a38d)
  });
}
async function _0x44bcb3(_0x54ca83) {
  if (_0x47e8fc()) return;
  let _0x261e17;
  !_0x261e17 && (_0x261e17 = (_0x54ca83.match(/https?:\/\/(.*?).douyin.com\/qishui\/share\/playlist\?playlist_id=([0-9]+)/) || [])[2]);
  if (!_0x261e17) {
    _0x261e17 = (_0x54ca83.match(/^(\d+)$/) || [])[1];
  }
  if (!_0x261e17) return;
  const _0x2059d4 = _0x8ea7c1(_0x261e17);
  return _0x2059d4.data.media_resources.map(_0x16803b);
}
async function _0x8ea7c1(_0x3cfb88) {
  if (_0x47e8fc()) return;
  try {
    return await _0x763ec9.default.post("https://api5-lq.qishui.com/luna/playlist/detail?charge=0", {
      "playlist_id": _0x3cfb88
    }, {
      "headers": _0x457aa7
    });
  } catch (_0x1a9fdf) {
    return [];
  }
}
async function _0x179df7(_0x84f314, _0xa0c186, _0x386d54) {
  if (_0x47e8fc()) return;
  const _0x7f56c5 = (await _0x763ec9.default.get("https://api5-lq.qishui.com/luna/artists/" + _0x84f314.id + "/tracks?count=1000&charge=0", {
    "headers": _0x457aa7
  })).data;
  return {
    "data": _0x7f56c5.tracks.map(_0x49565e)
  };
}
async function _0x1d5a12(_0x21226a) {
  if (_0x47e8fc()) return;
  const _0x49786f = (await _0x763ec9.default.get("https://api5-lq.qishui.com/luna/albums/" + _0x21226a.id + "?count=1000&charge=0", {
    "headers": _0x457aa7
  })).data;
  return {
    "musicList": _0x49786f.tracks.map(_0x49565e)
  };
}
async function _0x5e1360() {
  return {
    "data": [],
    "pinned": [{
      "id": 0,
      "title": "每日推荐"
    }, {
      "id": 14,
      "title": "流行"
    }, {
      "id": 8,
      "title": "华语"
    }, {
      "id": 9,
      "title": "欧美"
    }, {
      "id": 20,
      "title": "国风"
    }, {
      "id": 18,
      "title": "民谣"
    }, {
      "id": 15,
      "title": "摇滚"
    }, {
      "id": 38,
      "title": "说唱"
    }, {
      "id": 16,
      "title": "电子"
    }, {
      "id": 19,
      "title": "R&B"
    }, {
      "id": 69,
      "title": "治愈"
    }, {
      "id": 45,
      "title": "睡前"
    }, {
      "id": 40,
      "title": "学习"
    }]
  };
}
async function _0x4f9d9d(_0x556689, _0xe596e7) {
  if (_0x47e8fc()) return;
  let _0x20dbc5 = Number.isNaN(parseInt(_0x556689.id, 10)) ? 0 : parseInt(_0x556689.id, 10);
  try {
    const _0x16b8db = await _0x763ec9.default.post("https://api5-lq.qishui.com/luna/discover/mix?charge=0", {
      "block_type": "discover_playlist_mix",
      "feed_discover_extra": {},
      "latest_douyin_liked_playlist_show_ts": 0,
      "sub_channel_id": _0x20dbc5
    }, {
      "headers": _0x457aa7
    });
    return {
      "isEnd": false,
      "data": _0x16b8db.data.inner_block.map(_0x28e674)
    };
  } catch (_0x45ea05) {
    return {
      "isEnd": false,
      "data": []
    };
  }
}
async function _0xe4a37d(_0x539e85, _0x6ae96b = 1) {
  if (_0x47e8fc()) return;
  const _0x5784e4 = (_0x6ae96b - 1) * _0x24bc63,
    _0x327060 = (await _0x763ec9.default.get("https://api5-lq.qishui.com/luna/comments?group_id=" + _0x539e85.id + "&cursor=" + _0x5784e4 + "&count=" + _0x24bc63 + "&charge=0", {
      "headers": _0x457aa7
    })).data;
  return {
    "isEnd": _0x6ae96b * _0x24bc63 > _0x327060.count ? true : false,
    "data": _0x327060.comments.map(_0x5f5bca)
  };
}
async function _0x1b66fc(_0x1876ba) {
  if (_0x47e8fc()) return;
  const _0x577803 = await _0x8ea7c1(_0x1876ba.id);
  return {
    "isEnd": true,
    "musicList": _0x577803.data.media_resources.map(_0x16803b)
  };
}
module.exports = {
  "platform": "开心汽水",
  "version": "0.1.5",
  "author": "鸿蒙",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "https://gitee.com/hongmengv5/musicfree/raw/master/qishui.js",
  "cacheControl": "no-cache",
  "hints": {
    "importMusicSheet": ["汽水APP：歌单-分享-分享链接；手动访问链接后再复制链接粘贴即可", "网页：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
  },
  "supportedSearchType": ["music"],
  async "search"(_0x1f0edd, _0x56a1c0, _0x3dbf36) {
    if (_0x3dbf36 === "music") return await _0x58e6db(_0x1f0edd, _0x56a1c0);
  },
  "getMusicInfo": _0x86473c,
  "getLyric": _0x86473c,
  "getMediaSource": _0x49e305,
  "getTopLists": _0x5d79f5,
  "getTopListDetail": _0x71761d,
  "importMusicSheet": _0x44bcb3,
  "getArtistWorks": _0x179df7,
  "getAlbumInfo": _0x1d5a12,
  "getRecommendSheetTags": _0x5e1360,
  "getRecommendSheetsByTag": _0x4f9d9d,
  "getMusicSheetInfo": _0x1b66fc,
  "getMusicComments": _0xe4a37d
};