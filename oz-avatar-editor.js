/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const _a = "169";
const Fa = "attached", Lo = "detached";
const Mn = "", mt = "srgb", dt = "srgb-linear", ba = "display-p3", fs = "display-p3-linear", ls = "linear", nt = "srgb", cs = "rec709", hs = "p3";
const ka = "300 es";
class Nn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, r = i.length; s < r; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const xt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ba = 1234567;
const yi = Math.PI / 180, ei = 180 / Math.PI;
function Xt() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xt[a & 255] + xt[a >> 8 & 255] + xt[a >> 16 & 255] + xt[a >> 24 & 255] + "-" + xt[e & 255] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[t & 63 | 128] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 255] + xt[t >> 24 & 255] + xt[n & 255] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toLowerCase();
}
function St(a, e, t) {
  return Math.max(e, Math.min(t, a));
}
function va(a, e) {
  return (a % e + e) % e;
}
function Io(a, e, t, n, i) {
  return n + (a - e) * (i - n) / (t - e);
}
function Uo(a, e, t) {
  return a !== e ? (t - a) / (e - a) : 0;
}
function Ti(a, e, t) {
  return (1 - t) * a + t * e;
}
function No(a, e, t, n) {
  return Ti(a, e, 1 - Math.exp(-t * n));
}
function Fo(a, e = 1) {
  return e - Math.abs(va(a, e * 2) - e);
}
function ko(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * (3 - 2 * a));
}
function Bo(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * a * (a * (a * 6 - 15) + 10));
}
function Oo(a, e) {
  return a + Math.floor(Math.random() * (e - a + 1));
}
function Go(a, e) {
  return a + Math.random() * (e - a);
}
function zo(a) {
  return a * (0.5 - Math.random());
}
function Ho(a) {
  a !== void 0 && (Ba = a);
  let e = Ba += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Vo(a) {
  return a * yi;
}
function Wo(a) {
  return a * ei;
}
function jo(a) {
  return (a & a - 1) === 0 && a !== 0;
}
function Xo(a) {
  return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
}
function qo(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function Yo(a, e, t, n, i) {
  const s = Math.cos, r = Math.sin, o = s(t / 2), l = r(t / 2), c = s((e + n) / 2), d = r((e + n) / 2), u = s((e - n) / 2), h = r((e - n) / 2), f = s((n - e) / 2), g = r((n - e) / 2);
  switch (i) {
    case "XYX":
      a.set(o * d, l * u, l * h, o * c);
      break;
    case "YZY":
      a.set(l * h, o * d, l * u, o * c);
      break;
    case "ZXZ":
      a.set(l * u, l * h, o * d, o * c);
      break;
    case "XZX":
      a.set(o * d, l * g, l * f, o * c);
      break;
    case "YXY":
      a.set(l * f, o * d, l * g, o * c);
      break;
    case "ZYZ":
      a.set(l * g, l * f, o * d, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Wt(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint32Array:
      return a / 4294967295;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int32Array:
      return Math.max(a / 2147483647, -1);
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function et(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint32Array:
      return Math.round(a * 4294967295);
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int32Array:
      return Math.round(a * 2147483647);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Vt = {
  DEG2RAD: yi,
  RAD2DEG: ei,
  generateUUID: Xt,
  clamp: St,
  euclideanModulo: va,
  mapLinear: Io,
  inverseLerp: Uo,
  lerp: Ti,
  damp: No,
  pingpong: Fo,
  smoothstep: ko,
  smootherstep: Bo,
  randInt: Oo,
  randFloat: Go,
  randFloatSpread: zo,
  seededRandom: Ho,
  degToRad: Vo,
  radToDeg: Wo,
  isPowerOfTwo: jo,
  ceilPowerOfTwo: Xo,
  floorPowerOfTwo: qo,
  setQuaternionFromProperEuler: Yo,
  normalize: et,
  denormalize: Wt
};
class De {
  constructor(e = 0, t = 0) {
    De.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, r = this.y - e.y;
    return this.x = s * n - r * i + e.x, this.y = s * i + r * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ze {
  constructor(e, t, n, i, s, r, o, l, c) {
    ze.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, r, o, l, c);
  }
  set(e, t, n, i, s, r, o, l, c) {
    const d = this.elements;
    return d[0] = e, d[1] = i, d[2] = o, d[3] = t, d[4] = s, d[5] = l, d[6] = n, d[7] = r, d[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], o = n[3], l = n[6], c = n[1], d = n[4], u = n[7], h = n[2], f = n[5], g = n[8], _ = i[0], p = i[3], m = i[6], x = i[1], v = i[4], T = i[7], E = i[2], R = i[5], w = i[8];
    return s[0] = r * _ + o * x + l * E, s[3] = r * p + o * v + l * R, s[6] = r * m + o * T + l * w, s[1] = c * _ + d * x + u * E, s[4] = c * p + d * v + u * R, s[7] = c * m + d * T + u * w, s[2] = h * _ + f * x + g * E, s[5] = h * p + f * v + g * R, s[8] = h * m + f * T + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], d = e[8];
    return t * r * d - t * o * c - n * s * d + n * o * l + i * s * c - i * r * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], d = e[8], u = d * r - o * c, h = o * l - d * s, f = c * s - r * l, g = t * u + n * h + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - d * n) * _, e[2] = (o * n - i * r) * _, e[3] = h * _, e[4] = (d * t - i * l) * _, e[5] = (i * s - o * t) * _, e[6] = f * _, e[7] = (n * l - c * t) * _, e[8] = (r * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, r, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * r + c * o) + r + e,
      -i * c,
      i * l,
      -i * (-c * r + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(ys.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ys.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ys.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ys = /* @__PURE__ */ new ze();
function Zr(a) {
  for (let e = a.length - 1; e >= 0; --e)
    if (a[e] >= 65535) return !0;
  return !1;
}
function Ei(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
function Ko() {
  const a = Ei("canvas");
  return a.style.display = "block", a;
}
const Oa = {};
function rs(a) {
  a in Oa || (Oa[a] = !0, console.warn(a));
}
function $o(a, e, t) {
  return new Promise(function(n, i) {
    function s() {
      switch (a.clientWaitSync(e, a.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case a.WAIT_FAILED:
          i();
          break;
        case a.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Zo(a) {
  const e = a.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Jo(a) {
  const e = a.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Ga = /* @__PURE__ */ new ze().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), za = /* @__PURE__ */ new ze().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), ui = {
  [dt]: {
    transfer: ls,
    primaries: cs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (a) => a,
    fromReference: (a) => a
  },
  [mt]: {
    transfer: nt,
    primaries: cs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (a) => a.convertSRGBToLinear(),
    fromReference: (a) => a.convertLinearToSRGB()
  },
  [fs]: {
    transfer: ls,
    primaries: hs,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (a) => a.applyMatrix3(za),
    fromReference: (a) => a.applyMatrix3(Ga)
  },
  [ba]: {
    transfer: nt,
    primaries: hs,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (a) => a.convertSRGBToLinear().applyMatrix3(za),
    fromReference: (a) => a.applyMatrix3(Ga).convertLinearToSRGB()
  }
}, Qo = /* @__PURE__ */ new Set([dt, fs]), Xe = {
  enabled: !0,
  _workingColorSpace: dt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(a) {
    if (!Qo.has(a))
      throw new Error(`Unsupported working color space, "${a}".`);
    this._workingColorSpace = a;
  },
  convert: function(a, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return a;
    const n = ui[e].toReference, i = ui[t].fromReference;
    return i(n(a));
  },
  fromWorkingColorSpace: function(a, e) {
    return this.convert(a, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(a, e) {
    return this.convert(a, e, this._workingColorSpace);
  },
  getPrimaries: function(a) {
    return ui[a].primaries;
  },
  getTransfer: function(a) {
    return a === Mn ? ls : ui[a].transfer;
  },
  getLuminanceCoefficients: function(a, e = this._workingColorSpace) {
    return a.fromArray(ui[e].luminanceCoefficients);
  }
};
function Jn(a) {
  return a < 0.04045 ? a * 0.0773993808 : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function Ts(a) {
  return a < 31308e-7 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
let kn;
class el {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      kn === void 0 && (kn = Ei("canvas")), kn.width = e.width, kn.height = e.height;
      const n = kn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = kn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ei("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let r = 0; r < s.length; r++)
        s[r] = Jn(s[r] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Jn(t[n] / 255) * 255) : t[n] = Jn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let tl = 0;
class Jr {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: tl++ }), this.uuid = Xt(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let r = 0, o = i.length; r < o; r++)
          i[r].isDataTexture ? s.push(As(i[r].image)) : s.push(As(i[r]));
      } else
        s = As(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function As(a) {
  return typeof HTMLImageElement < "u" && a instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && a instanceof ImageBitmap ? el.getDataURL(a) : a.data ? {
    data: Array.from(a.data),
    width: a.width,
    height: a.height,
    type: a.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let nl = 0;
class gt extends Nn {
  constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, r = 1008, o = 1023, l = 1009, c = gt.DEFAULT_ANISOTROPY, d = Mn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: nl++ }), this.uuid = Xt(), this.name = "", this.source = new Jr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = r, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new De(0, 0), this.repeat = new De(1, 1), this.center = new De(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ze(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = 300;
gt.DEFAULT_ANISOTROPY = 1;
class Ve {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ve.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s, this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s, this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s, this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], d = l[4], u = l[8], h = l[1], f = l[5], g = l[9], _ = l[2], p = l[6], m = l[10];
    if (Math.abs(d - h) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(d + h) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + f + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, T = (f + 1) / 2, E = (m + 1) / 2, R = (d + h) / 4, w = (u + _) / 4, D = (g + p) / 4;
      return v > T && v > E ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = R / n, s = w / n) : T > E ? T < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(T), n = R / i, s = D / i) : E < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(E), n = w / s, i = D / s), this.set(n, i, s, t), this;
    }
    let x = Math.sqrt((p - g) * (p - g) + (u - _) * (u - _) + (h - d) * (h - d));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (p - g) / x, this.y = (u - _) / x, this.z = (h - d) / x, this.w = Math.acos((c + f + m - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class il extends Nn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ve(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ve(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new gt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const r = n.count;
    for (let o = 0; o < r; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Jr(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Rt extends il {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Qr extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class sl extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ut {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, r, o) {
    let l = n[i + 0], c = n[i + 1], d = n[i + 2], u = n[i + 3];
    const h = s[r + 0], f = s[r + 1], g = s[r + 2], _ = s[r + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = h, e[t + 1] = f, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== h || c !== f || d !== g) {
      let p = 1 - o;
      const m = l * h + c * f + d * g + u * _, x = m >= 0 ? 1 : -1, v = 1 - m * m;
      if (v > Number.EPSILON) {
        const E = Math.sqrt(v), R = Math.atan2(E, m * x);
        p = Math.sin(p * R) / E, o = Math.sin(o * R) / E;
      }
      const T = o * x;
      if (l = l * p + h * T, c = c * p + f * T, d = d * p + g * T, u = u * p + _ * T, p === 1 - o) {
        const E = 1 / Math.sqrt(l * l + c * c + d * d + u * u);
        l *= E, c *= E, d *= E, u *= E;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, r) {
    const o = n[i], l = n[i + 1], c = n[i + 2], d = n[i + 3], u = s[r], h = s[r + 1], f = s[r + 2], g = s[r + 3];
    return e[t] = o * g + d * u + l * f - c * h, e[t + 1] = l * g + d * h + c * u - o * f, e[t + 2] = c * g + d * f + o * h - l * u, e[t + 3] = d * g - o * u - l * h - c * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, r = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), d = o(i / 2), u = o(s / 2), h = l(n / 2), f = l(i / 2), g = l(s / 2);
    switch (r) {
      case "XYZ":
        this._x = h * d * u + c * f * g, this._y = c * f * u - h * d * g, this._z = c * d * g + h * f * u, this._w = c * d * u - h * f * g;
        break;
      case "YXZ":
        this._x = h * d * u + c * f * g, this._y = c * f * u - h * d * g, this._z = c * d * g - h * f * u, this._w = c * d * u + h * f * g;
        break;
      case "ZXY":
        this._x = h * d * u - c * f * g, this._y = c * f * u + h * d * g, this._z = c * d * g + h * f * u, this._w = c * d * u - h * f * g;
        break;
      case "ZYX":
        this._x = h * d * u - c * f * g, this._y = c * f * u + h * d * g, this._z = c * d * g - h * f * u, this._w = c * d * u + h * f * g;
        break;
      case "YZX":
        this._x = h * d * u + c * f * g, this._y = c * f * u + h * d * g, this._z = c * d * g - h * f * u, this._w = c * d * u - h * f * g;
        break;
      case "XZY":
        this._x = h * d * u - c * f * g, this._y = c * f * u - h * d * g, this._z = c * d * g + h * f * u, this._w = c * d * u + h * f * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], r = t[1], o = t[5], l = t[9], c = t[2], d = t[6], u = t[10], h = n + o + u;
    if (h > 0) {
      const f = 0.5 / Math.sqrt(h + 1);
      this._w = 0.25 / f, this._x = (d - l) * f, this._y = (s - c) * f, this._z = (r - i) * f;
    } else if (n > o && n > u) {
      const f = 2 * Math.sqrt(1 + n - o - u);
      this._w = (d - l) / f, this._x = 0.25 * f, this._y = (i + r) / f, this._z = (s + c) / f;
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / f, this._x = (i + r) / f, this._y = 0.25 * f, this._z = (l + d) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - o);
      this._w = (r - i) / f, this._x = (s + c) / f, this._y = (l + d) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(St(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._w, o = t._x, l = t._y, c = t._z, d = t._w;
    return this._x = n * d + r * o + i * c - s * l, this._y = i * d + r * l + s * o - n * c, this._z = s * d + r * c + n * l - i * o, this._w = r * d - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, r = this._w;
    let o = r * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = r, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * r + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), d = Math.atan2(c, o), u = Math.sin((1 - t) * d) / c, h = Math.sin(t * d) / c;
    return this._w = r * u + this._w * h, this._x = n * u + this._x * h, this._y = i * u + this._y * h, this._z = s * u + this._z * h, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ha.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ha.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, r = e.y, o = e.z, l = e.w, c = 2 * (r * i - o * n), d = 2 * (o * t - s * i), u = 2 * (s * n - r * t);
    return this.x = t + l * c + r * u - o * d, this.y = n + l * d + o * c - s * u, this.z = i + l * u + s * d - r * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, r = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * r - n * l, this.z = n * o - i * r, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Es.copy(this).projectOnVector(e), this.sub(Es);
  }
  reflect(e) {
    return this.sub(Es.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Es = /* @__PURE__ */ new P(), Ha = /* @__PURE__ */ new Ut();
class un {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Gt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Gt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Gt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let r = 0, o = s.count; r < o; r++)
          e.isMesh === !0 ? e.getVertexPosition(r, Gt) : Gt.fromBufferAttribute(s, r), Gt.applyMatrix4(e.matrixWorld), this.expandByPoint(Gt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ii.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ii.copy(n.boundingBox)), Ii.applyMatrix4(e.matrixWorld), this.union(Ii);
    }
    const i = e.children;
    for (let s = 0, r = i.length; s < r; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Gt), Gt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(fi), Ui.subVectors(this.max, fi), Bn.subVectors(e.a, fi), On.subVectors(e.b, fi), Gn.subVectors(e.c, fi), pn.subVectors(On, Bn), mn.subVectors(Gn, On), An.subVectors(Bn, Gn);
    let t = [
      0,
      -pn.z,
      pn.y,
      0,
      -mn.z,
      mn.y,
      0,
      -An.z,
      An.y,
      pn.z,
      0,
      -pn.x,
      mn.z,
      0,
      -mn.x,
      An.z,
      0,
      -An.x,
      -pn.y,
      pn.x,
      0,
      -mn.y,
      mn.x,
      0,
      -An.y,
      An.x,
      0
    ];
    return !ws(t, Bn, On, Gn, Ui) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ws(t, Bn, On, Gn, Ui)) ? !1 : (Ni.crossVectors(pn, mn), t = [Ni.x, Ni.y, Ni.z], ws(t, Bn, On, Gn, Ui));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Gt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Gt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(nn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const nn = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], Gt = /* @__PURE__ */ new P(), Ii = /* @__PURE__ */ new un(), Bn = /* @__PURE__ */ new P(), On = /* @__PURE__ */ new P(), Gn = /* @__PURE__ */ new P(), pn = /* @__PURE__ */ new P(), mn = /* @__PURE__ */ new P(), An = /* @__PURE__ */ new P(), fi = /* @__PURE__ */ new P(), Ui = /* @__PURE__ */ new P(), Ni = /* @__PURE__ */ new P(), En = /* @__PURE__ */ new P();
function ws(a, e, t, n, i) {
  for (let s = 0, r = a.length - 3; s <= r; s += 3) {
    En.fromArray(a, s);
    const o = i.x * Math.abs(En.x) + i.y * Math.abs(En.y) + i.z * Math.abs(En.z), l = e.dot(En), c = t.dot(En), d = n.dot(En);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o)
      return !1;
  }
  return !0;
}
const al = /* @__PURE__ */ new un(), pi = /* @__PURE__ */ new P(), Cs = /* @__PURE__ */ new P();
class Jt {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : al.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, r = e.length; s < r; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    pi.subVectors(e, this.center);
    const t = pi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(pi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Cs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(pi.copy(e.center).add(Cs)), this.expandByPoint(pi.copy(e.center).sub(Cs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sn = /* @__PURE__ */ new P(), Rs = /* @__PURE__ */ new P(), Fi = /* @__PURE__ */ new P(), gn = /* @__PURE__ */ new P(), Ps = /* @__PURE__ */ new P(), ki = /* @__PURE__ */ new P(), Ds = /* @__PURE__ */ new P();
class ps {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, sn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (sn.copy(this.origin).addScaledVector(this.direction, t), sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Rs.copy(e).add(t).multiplyScalar(0.5), Fi.copy(t).sub(e).normalize(), gn.copy(this.origin).sub(Rs);
    const s = e.distanceTo(t) * 0.5, r = -this.direction.dot(Fi), o = gn.dot(this.direction), l = -gn.dot(Fi), c = gn.lengthSq(), d = Math.abs(1 - r * r);
    let u, h, f, g;
    if (d > 0)
      if (u = r * l - o, h = r * o - l, g = s * d, u >= 0)
        if (h >= -g)
          if (h <= g) {
            const _ = 1 / d;
            u *= _, h *= _, f = u * (u + r * h + 2 * o) + h * (r * u + h + 2 * l) + c;
          } else
            h = s, u = Math.max(0, -(r * h + o)), f = -u * u + h * (h + 2 * l) + c;
        else
          h = -s, u = Math.max(0, -(r * h + o)), f = -u * u + h * (h + 2 * l) + c;
      else
        h <= -g ? (u = Math.max(0, -(-r * s + o)), h = u > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -u * u + h * (h + 2 * l) + c) : h <= g ? (u = 0, h = Math.min(Math.max(-s, -l), s), f = h * (h + 2 * l) + c) : (u = Math.max(0, -(r * s + o)), h = u > 0 ? s : Math.min(Math.max(-s, -l), s), f = -u * u + h * (h + 2 * l) + c);
    else
      h = r > 0 ? -s : s, u = Math.max(0, -(r * h + o)), f = -u * u + h * (h + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Rs).addScaledVector(Fi, h), f;
  }
  intersectSphere(e, t) {
    sn.subVectors(e.center, this.origin);
    const n = sn.dot(this.direction), i = sn.dot(sn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const r = Math.sqrt(s - i), o = n - r, l = n + r;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, r, o, l;
    const c = 1 / this.direction.x, d = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
    return c >= 0 ? (n = (e.min.x - h.x) * c, i = (e.max.x - h.x) * c) : (n = (e.max.x - h.x) * c, i = (e.min.x - h.x) * c), d >= 0 ? (s = (e.min.y - h.y) * d, r = (e.max.y - h.y) * d) : (s = (e.max.y - h.y) * d, r = (e.min.y - h.y) * d), n > r || s > i || ((s > n || isNaN(n)) && (n = s), (r < i || isNaN(i)) && (i = r), u >= 0 ? (o = (e.min.z - h.z) * u, l = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, l = (e.min.z - h.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Ps.subVectors(t, e), ki.subVectors(n, e), Ds.crossVectors(Ps, ki);
    let r = this.direction.dot(Ds), o;
    if (r > 0) {
      if (i) return null;
      o = 1;
    } else if (r < 0)
      o = -1, r = -r;
    else
      return null;
    gn.subVectors(this.origin, e);
    const l = o * this.direction.dot(ki.crossVectors(gn, ki));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Ps.cross(gn));
    if (c < 0 || l + c > r)
      return null;
    const d = -o * gn.dot(Ds);
    return d < 0 ? null : this.at(d / r, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Le {
  constructor(e, t, n, i, s, r, o, l, c, d, u, h, f, g, _, p) {
    Le.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, r, o, l, c, d, u, h, f, g, _, p);
  }
  set(e, t, n, i, s, r, o, l, c, d, u, h, f, g, _, p) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = s, m[5] = r, m[9] = o, m[13] = l, m[2] = c, m[6] = d, m[10] = u, m[14] = h, m[3] = f, m[7] = g, m[11] = _, m[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Le().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / zn.setFromMatrixColumn(e, 0).length(), s = 1 / zn.setFromMatrixColumn(e, 1).length(), r = 1 / zn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, r = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const h = r * d, f = r * u, g = o * d, _ = o * u;
      t[0] = l * d, t[4] = -l * u, t[8] = c, t[1] = f + g * c, t[5] = h - _ * c, t[9] = -o * l, t[2] = _ - h * c, t[6] = g + f * c, t[10] = r * l;
    } else if (e.order === "YXZ") {
      const h = l * d, f = l * u, g = c * d, _ = c * u;
      t[0] = h + _ * o, t[4] = g * o - f, t[8] = r * c, t[1] = r * u, t[5] = r * d, t[9] = -o, t[2] = f * o - g, t[6] = _ + h * o, t[10] = r * l;
    } else if (e.order === "ZXY") {
      const h = l * d, f = l * u, g = c * d, _ = c * u;
      t[0] = h - _ * o, t[4] = -r * u, t[8] = g + f * o, t[1] = f + g * o, t[5] = r * d, t[9] = _ - h * o, t[2] = -r * c, t[6] = o, t[10] = r * l;
    } else if (e.order === "ZYX") {
      const h = r * d, f = r * u, g = o * d, _ = o * u;
      t[0] = l * d, t[4] = g * c - f, t[8] = h * c + _, t[1] = l * u, t[5] = _ * c + h, t[9] = f * c - g, t[2] = -c, t[6] = o * l, t[10] = r * l;
    } else if (e.order === "YZX") {
      const h = r * l, f = r * c, g = o * l, _ = o * c;
      t[0] = l * d, t[4] = _ - h * u, t[8] = g * u + f, t[1] = u, t[5] = r * d, t[9] = -o * d, t[2] = -c * d, t[6] = f * u + g, t[10] = h - _ * u;
    } else if (e.order === "XZY") {
      const h = r * l, f = r * c, g = o * l, _ = o * c;
      t[0] = l * d, t[4] = -u, t[8] = c * d, t[1] = h * u + _, t[5] = r * d, t[9] = f * u - g, t[2] = g * u - f, t[6] = o * d, t[10] = _ * u + h;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(rl, e, ol);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Lt.subVectors(e, t), Lt.lengthSq() === 0 && (Lt.z = 1), Lt.normalize(), _n.crossVectors(n, Lt), _n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Lt.x += 1e-4 : Lt.z += 1e-4, Lt.normalize(), _n.crossVectors(n, Lt)), _n.normalize(), Bi.crossVectors(Lt, _n), i[0] = _n.x, i[4] = Bi.x, i[8] = Lt.x, i[1] = _n.y, i[5] = Bi.y, i[9] = Lt.y, i[2] = _n.z, i[6] = Bi.z, i[10] = Lt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], o = n[4], l = n[8], c = n[12], d = n[1], u = n[5], h = n[9], f = n[13], g = n[2], _ = n[6], p = n[10], m = n[14], x = n[3], v = n[7], T = n[11], E = n[15], R = i[0], w = i[4], D = i[8], Y = i[12], b = i[1], y = i[5], B = i[9], G = i[13], V = i[2], j = i[6], O = i[10], K = i[14], z = i[3], ie = i[7], ce = i[11], ge = i[15];
    return s[0] = r * R + o * b + l * V + c * z, s[4] = r * w + o * y + l * j + c * ie, s[8] = r * D + o * B + l * O + c * ce, s[12] = r * Y + o * G + l * K + c * ge, s[1] = d * R + u * b + h * V + f * z, s[5] = d * w + u * y + h * j + f * ie, s[9] = d * D + u * B + h * O + f * ce, s[13] = d * Y + u * G + h * K + f * ge, s[2] = g * R + _ * b + p * V + m * z, s[6] = g * w + _ * y + p * j + m * ie, s[10] = g * D + _ * B + p * O + m * ce, s[14] = g * Y + _ * G + p * K + m * ge, s[3] = x * R + v * b + T * V + E * z, s[7] = x * w + v * y + T * j + E * ie, s[11] = x * D + v * B + T * O + E * ce, s[15] = x * Y + v * G + T * K + E * ge, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], r = e[1], o = e[5], l = e[9], c = e[13], d = e[2], u = e[6], h = e[10], f = e[14], g = e[3], _ = e[7], p = e[11], m = e[15];
    return g * (+s * l * u - i * c * u - s * o * h + n * c * h + i * o * f - n * l * f) + _ * (+t * l * f - t * c * h + s * r * h - i * r * f + i * c * d - s * l * d) + p * (+t * c * u - t * o * f - s * r * u + n * r * f + s * o * d - n * c * d) + m * (-i * o * d - t * l * u + t * o * h + i * r * u - n * r * h + n * l * d);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], d = e[8], u = e[9], h = e[10], f = e[11], g = e[12], _ = e[13], p = e[14], m = e[15], x = u * p * c - _ * h * c + _ * l * f - o * p * f - u * l * m + o * h * m, v = g * h * c - d * p * c - g * l * f + r * p * f + d * l * m - r * h * m, T = d * _ * c - g * u * c + g * o * f - r * _ * f - d * o * m + r * u * m, E = g * u * l - d * _ * l - g * o * h + r * _ * h + d * o * p - r * u * p, R = t * x + n * v + i * T + s * E;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / R;
    return e[0] = x * w, e[1] = (_ * h * s - u * p * s - _ * i * f + n * p * f + u * i * m - n * h * m) * w, e[2] = (o * p * s - _ * l * s + _ * i * c - n * p * c - o * i * m + n * l * m) * w, e[3] = (u * l * s - o * h * s - u * i * c + n * h * c + o * i * f - n * l * f) * w, e[4] = v * w, e[5] = (d * p * s - g * h * s + g * i * f - t * p * f - d * i * m + t * h * m) * w, e[6] = (g * l * s - r * p * s - g * i * c + t * p * c + r * i * m - t * l * m) * w, e[7] = (r * h * s - d * l * s + d * i * c - t * h * c - r * i * f + t * l * f) * w, e[8] = T * w, e[9] = (g * u * s - d * _ * s - g * n * f + t * _ * f + d * n * m - t * u * m) * w, e[10] = (r * _ * s - g * o * s + g * n * c - t * _ * c - r * n * m + t * o * m) * w, e[11] = (d * o * s - r * u * s - d * n * c + t * u * c + r * n * f - t * o * f) * w, e[12] = E * w, e[13] = (d * _ * i - g * u * i + g * n * h - t * _ * h - d * n * p + t * u * p) * w, e[14] = (g * o * i - r * _ * i - g * n * l + t * _ * l + r * n * p - t * o * p) * w, e[15] = (r * u * i - d * o * i + d * n * l - t * u * l - r * n * h + t * o * h) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, r = e.x, o = e.y, l = e.z, c = s * r, d = s * o;
    return this.set(
      c * r + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      d * o + n,
      d * l - i * r,
      0,
      c * l - i * o,
      d * l + i * r,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, r) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      r,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, r = t._y, o = t._z, l = t._w, c = s + s, d = r + r, u = o + o, h = s * c, f = s * d, g = s * u, _ = r * d, p = r * u, m = o * u, x = l * c, v = l * d, T = l * u, E = n.x, R = n.y, w = n.z;
    return i[0] = (1 - (_ + m)) * E, i[1] = (f + T) * E, i[2] = (g - v) * E, i[3] = 0, i[4] = (f - T) * R, i[5] = (1 - (h + m)) * R, i[6] = (p + x) * R, i[7] = 0, i[8] = (g + v) * w, i[9] = (p - x) * w, i[10] = (1 - (h + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = zn.set(i[0], i[1], i[2]).length();
    const r = zn.set(i[4], i[5], i[6]).length(), o = zn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], zt.copy(this);
    const c = 1 / s, d = 1 / r, u = 1 / o;
    return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= d, zt.elements[5] *= d, zt.elements[6] *= d, zt.elements[8] *= u, zt.elements[9] *= u, zt.elements[10] *= u, t.setFromRotationMatrix(zt), n.x = s, n.y = r, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, r, o = 2e3) {
    const l = this.elements, c = 2 * s / (t - e), d = 2 * s / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i);
    let f, g;
    if (o === 2e3)
      f = -(r + s) / (r - s), g = -2 * r * s / (r - s);
    else if (o === 2001)
      f = -r / (r - s), g = -r * s / (r - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = d, l[9] = h, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, r, o = 2e3) {
    const l = this.elements, c = 1 / (t - e), d = 1 / (n - i), u = 1 / (r - s), h = (t + e) * c, f = (n + i) * d;
    let g, _;
    if (o === 2e3)
      g = (r + s) * u, _ = -2 * u;
    else if (o === 2001)
      g = s * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -h, l[1] = 0, l[5] = 2 * d, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const zn = /* @__PURE__ */ new P(), zt = /* @__PURE__ */ new Le(), rl = /* @__PURE__ */ new P(0, 0, 0), ol = /* @__PURE__ */ new P(1, 1, 1), _n = /* @__PURE__ */ new P(), Bi = /* @__PURE__ */ new P(), Lt = /* @__PURE__ */ new P(), Va = /* @__PURE__ */ new Le(), Wa = /* @__PURE__ */ new Ut();
class Kt {
  constructor(e = 0, t = 0, n = 0, i = Kt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], r = i[4], o = i[8], l = i[1], c = i[5], d = i[9], u = i[2], h = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(St(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-d, f), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(h, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-St(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(St(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-r, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-St(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(h, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-r, c));
        break;
      case "YZX":
        this._z = Math.asin(St(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-St(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(h, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-d, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Va.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Va, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Wa.setFromEuler(this), this.setFromQuaternion(Wa, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Kt.DEFAULT_ORDER = "XYZ";
class eo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ll = 0;
const ja = /* @__PURE__ */ new P(), Hn = /* @__PURE__ */ new Ut(), an = /* @__PURE__ */ new Le(), Oi = /* @__PURE__ */ new P(), mi = /* @__PURE__ */ new P(), cl = /* @__PURE__ */ new P(), hl = /* @__PURE__ */ new Ut(), Xa = /* @__PURE__ */ new P(1, 0, 0), qa = /* @__PURE__ */ new P(0, 1, 0), Ya = /* @__PURE__ */ new P(0, 0, 1), Ka = { type: "added" }, dl = { type: "removed" }, Vn = { type: "childadded", child: null }, Ls = { type: "childremoved", child: null };
class at extends Nn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ll++ }), this.uuid = Xt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = at.DEFAULT_UP.clone();
    const e = new P(), t = new Kt(), n = new Ut(), i = new P(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function r() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(r), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Le()
      },
      normalMatrix: {
        value: new ze()
      }
    }), this.matrix = new Le(), this.matrixWorld = new Le(), this.matrixAutoUpdate = at.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new eo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Hn.setFromAxisAngle(e, t), this.quaternion.multiply(Hn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Hn.setFromAxisAngle(e, t), this.quaternion.premultiply(Hn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Xa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(qa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ya, e);
  }
  translateOnAxis(e, t) {
    return ja.copy(e).applyQuaternion(this.quaternion), this.position.add(ja.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Xa, e);
  }
  translateY(e) {
    return this.translateOnAxis(qa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ya, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(an.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Oi.copy(e) : Oi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), mi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? an.lookAt(mi, Oi, this.up) : an.lookAt(Oi, mi, this.up), this.quaternion.setFromRotationMatrix(an), i && (an.extractRotation(i.matrixWorld), Hn.setFromRotationMatrix(an), this.quaternion.premultiply(Hn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ka), Vn.child = e, this.dispatchEvent(Vn), Vn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(dl), Ls.child = e, this.dispatchEvent(Ls), Ls.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), an.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), an.multiply(e.parent.matrixWorld)), e.applyMatrix4(an), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ka), Vn.child = e, this.dispatchEvent(Vn), Vn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0)
        return r;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, r = i.length; s < r; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(mi, e, cl), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(mi, hl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let s = 0, r = i.length; s < r; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const u = l[c];
            s(e.shapes, u);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = r(e.geometries), l = r(e.materials), c = r(e.textures), d = r(e.images), u = r(e.shapes), h = r(e.skeletons), f = r(e.animations), g = r(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), u.length > 0 && (n.shapes = u), h.length > 0 && (n.skeletons = h), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function r(o) {
      const l = [];
      for (const c in o) {
        const d = o[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
at.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
at.DEFAULT_MATRIX_AUTO_UPDATE = !0;
at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ht = /* @__PURE__ */ new P(), rn = /* @__PURE__ */ new P(), Is = /* @__PURE__ */ new P(), on = /* @__PURE__ */ new P(), Wn = /* @__PURE__ */ new P(), jn = /* @__PURE__ */ new P(), $a = /* @__PURE__ */ new P(), Us = /* @__PURE__ */ new P(), Ns = /* @__PURE__ */ new P(), Fs = /* @__PURE__ */ new P(), ks = /* @__PURE__ */ new Ve(), Bs = /* @__PURE__ */ new Ve(), Os = /* @__PURE__ */ new Ve();
class jt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Ht.subVectors(e, t), i.cross(Ht);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Ht.subVectors(i, t), rn.subVectors(n, t), Is.subVectors(e, t);
    const r = Ht.dot(Ht), o = Ht.dot(rn), l = Ht.dot(Is), c = rn.dot(rn), d = rn.dot(Is), u = r * c - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const h = 1 / u, f = (c * l - o * d) * h, g = (r * d - o * l) * h;
    return s.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, r, o, l) {
    return this.getBarycoord(e, t, n, i, on) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, on.x), l.addScaledVector(r, on.y), l.addScaledVector(o, on.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, s, r) {
    return ks.setScalar(0), Bs.setScalar(0), Os.setScalar(0), ks.fromBufferAttribute(e, t), Bs.fromBufferAttribute(e, n), Os.fromBufferAttribute(e, i), r.setScalar(0), r.addScaledVector(ks, s.x), r.addScaledVector(Bs, s.y), r.addScaledVector(Os, s.z), r;
  }
  static isFrontFacing(e, t, n, i) {
    return Ht.subVectors(n, t), rn.subVectors(e, t), Ht.cross(rn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ht.subVectors(this.c, this.b), rn.subVectors(this.a, this.b), Ht.cross(rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return jt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let r, o;
    Wn.subVectors(i, n), jn.subVectors(s, n), Us.subVectors(e, n);
    const l = Wn.dot(Us), c = jn.dot(Us);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Ns.subVectors(e, i);
    const d = Wn.dot(Ns), u = jn.dot(Ns);
    if (d >= 0 && u <= d)
      return t.copy(i);
    const h = l * u - d * c;
    if (h <= 0 && l >= 0 && d <= 0)
      return r = l / (l - d), t.copy(n).addScaledVector(Wn, r);
    Fs.subVectors(e, s);
    const f = Wn.dot(Fs), g = jn.dot(Fs);
    if (g >= 0 && f <= g)
      return t.copy(s);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(jn, o);
    const p = d * g - f * u;
    if (p <= 0 && u - d >= 0 && f - g >= 0)
      return $a.subVectors(s, i), o = (u - d) / (u - d + (f - g)), t.copy(i).addScaledVector($a, o);
    const m = 1 / (p + _ + h);
    return r = _ * m, o = h * m, t.copy(n).addScaledVector(Wn, r).addScaledVector(jn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const to = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, bn = { h: 0, s: 0, l: 0 }, Gi = { h: 0, s: 0, l: 0 };
function Gs(a, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? a + (e - a) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? a + (e - a) * 6 * (2 / 3 - t) : a;
}
class re {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = mt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Xe.workingColorSpace) {
    if (e = va(e, 1), t = St(t, 0, 1), n = St(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
      this.r = Gs(r, s, e + 1 / 3), this.g = Gs(r, s, e), this.b = Gs(r, s, e - 1 / 3);
    }
    return Xe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = mt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const r = i[1], o = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], r = s.length;
      if (r === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (r === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = mt) {
    const n = to[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Jn(e.r), this.g = Jn(e.g), this.b = Jn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ts(e.r), this.g = Ts(e.g), this.b = Ts(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = mt) {
    return Xe.fromWorkingColorSpace(Mt.copy(this), e), Math.round(St(Mt.r * 255, 0, 255)) * 65536 + Math.round(St(Mt.g * 255, 0, 255)) * 256 + Math.round(St(Mt.b * 255, 0, 255));
  }
  getHexString(e = mt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(Mt.copy(this), t);
    const n = Mt.r, i = Mt.g, s = Mt.b, r = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const d = (o + r) / 2;
    if (o === r)
      l = 0, c = 0;
    else {
      const u = r - o;
      switch (c = d <= 0.5 ? u / (r + o) : u / (2 - r - o), r) {
        case n:
          l = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = d, e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.fromWorkingColorSpace(Mt.copy(this), t), e.r = Mt.r, e.g = Mt.g, e.b = Mt.b, e;
  }
  getStyle(e = mt) {
    Xe.fromWorkingColorSpace(Mt.copy(this), e);
    const t = Mt.r, n = Mt.g, i = Mt.b;
    return e !== mt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(bn), this.setHSL(bn.h + e, bn.s + t, bn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(bn), e.getHSL(Gi);
    const n = Ti(bn.h, Gi.h, t), i = Ti(bn.s, Gi.s, t), s = Ti(bn.l, Gi.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Mt = /* @__PURE__ */ new re();
re.NAMES = to;
let ul = 0;
class qt extends Nn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ul++ }), this.uuid = Xt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new re(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const r = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, r.push(l);
      }
      return r;
    }
    if (t) {
      const s = i(e.textures), r = i(e.images);
      s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Sn extends qt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new re(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Kt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ht = /* @__PURE__ */ new P(), zi = /* @__PURE__ */ new De();
class Et {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        zi.fromBufferAttribute(this, t), zi.applyMatrix3(e), this.setXY(t, zi.x, zi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ht.fromBufferAttribute(this, t), ht.applyMatrix3(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyMatrix4(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyNormalMatrix(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.transformDirection(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Wt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), s = et(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class no extends Et {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class io extends Et {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Yt extends Et {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let fl = 0;
const Ft = /* @__PURE__ */ new Le(), zs = /* @__PURE__ */ new at(), Xn = /* @__PURE__ */ new P(), It = /* @__PURE__ */ new un(), gi = /* @__PURE__ */ new un(), pt = /* @__PURE__ */ new P();
class $t extends Nn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: fl++ }), this.uuid = Xt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Zr(e) ? io : no)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new ze().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ft.makeRotationFromQuaternion(e), this.applyMatrix4(Ft), this;
  }
  rotateX(e) {
    return Ft.makeRotationX(e), this.applyMatrix4(Ft), this;
  }
  rotateY(e) {
    return Ft.makeRotationY(e), this.applyMatrix4(Ft), this;
  }
  rotateZ(e) {
    return Ft.makeRotationZ(e), this.applyMatrix4(Ft), this;
  }
  translate(e, t, n) {
    return Ft.makeTranslation(e, t, n), this.applyMatrix4(Ft), this;
  }
  scale(e, t, n) {
    return Ft.makeScale(e, t, n), this.applyMatrix4(Ft), this;
  }
  lookAt(e) {
    return zs.lookAt(e), zs.updateMatrix(), this.applyMatrix4(zs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Xn).negate(), this.translate(Xn.x, Xn.y, Xn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Yt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new un());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          It.setFromBufferAttribute(s), this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, It.min), this.boundingBox.expandByPoint(pt), pt.addVectors(this.boundingBox.max, It.max), this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(It.min), this.boundingBox.expandByPoint(It.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Jt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (It.setFromBufferAttribute(e), t)
        for (let s = 0, r = t.length; s < r; s++) {
          const o = t[s];
          gi.setFromBufferAttribute(o), this.morphTargetsRelative ? (pt.addVectors(It.min, gi.min), It.expandByPoint(pt), pt.addVectors(It.max, gi.max), It.expandByPoint(pt)) : (It.expandByPoint(gi.min), It.expandByPoint(gi.max));
        }
      It.getCenter(n);
      let i = 0;
      for (let s = 0, r = e.count; s < r; s++)
        pt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(pt));
      if (t)
        for (let s = 0, r = t.length; s < r; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, d = o.count; c < d; c++)
            pt.fromBufferAttribute(o, c), l && (Xn.fromBufferAttribute(e, c), pt.add(Xn)), i = Math.max(i, n.distanceToSquared(pt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Et(new Float32Array(4 * n.count), 4));
    const r = this.getAttribute("tangent"), o = [], l = [];
    for (let D = 0; D < n.count; D++)
      o[D] = new P(), l[D] = new P();
    const c = new P(), d = new P(), u = new P(), h = new De(), f = new De(), g = new De(), _ = new P(), p = new P();
    function m(D, Y, b) {
      c.fromBufferAttribute(n, D), d.fromBufferAttribute(n, Y), u.fromBufferAttribute(n, b), h.fromBufferAttribute(s, D), f.fromBufferAttribute(s, Y), g.fromBufferAttribute(s, b), d.sub(c), u.sub(c), f.sub(h), g.sub(h);
      const y = 1 / (f.x * g.y - g.x * f.y);
      isFinite(y) && (_.copy(d).multiplyScalar(g.y).addScaledVector(u, -f.y).multiplyScalar(y), p.copy(u).multiplyScalar(f.x).addScaledVector(d, -g.x).multiplyScalar(y), o[D].add(_), o[Y].add(_), o[b].add(_), l[D].add(p), l[Y].add(p), l[b].add(p));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: e.count
    }]);
    for (let D = 0, Y = x.length; D < Y; ++D) {
      const b = x[D], y = b.start, B = b.count;
      for (let G = y, V = y + B; G < V; G += 3)
        m(
          e.getX(G + 0),
          e.getX(G + 1),
          e.getX(G + 2)
        );
    }
    const v = new P(), T = new P(), E = new P(), R = new P();
    function w(D) {
      E.fromBufferAttribute(i, D), R.copy(E);
      const Y = o[D];
      v.copy(Y), v.sub(E.multiplyScalar(E.dot(Y))).normalize(), T.crossVectors(R, Y);
      const y = T.dot(l[D]) < 0 ? -1 : 1;
      r.setXYZW(D, v.x, v.y, v.z, y);
    }
    for (let D = 0, Y = x.length; D < Y; ++D) {
      const b = x[D], y = b.start, B = b.count;
      for (let G = y, V = y + B; G < V; G += 3)
        w(e.getX(G + 0)), w(e.getX(G + 1)), w(e.getX(G + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Et(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let h = 0, f = n.count; h < f; h++)
          n.setXYZ(h, 0, 0, 0);
      const i = new P(), s = new P(), r = new P(), o = new P(), l = new P(), c = new P(), d = new P(), u = new P();
      if (e)
        for (let h = 0, f = e.count; h < f; h += 3) {
          const g = e.getX(h + 0), _ = e.getX(h + 1), p = e.getX(h + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), r.fromBufferAttribute(t, p), d.subVectors(r, s), u.subVectors(i, s), d.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, p), o.add(d), l.add(d), c.add(d), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let h = 0, f = t.count; h < f; h += 3)
          i.fromBufferAttribute(t, h + 0), s.fromBufferAttribute(t, h + 1), r.fromBufferAttribute(t, h + 2), d.subVectors(r, s), u.subVectors(i, s), d.cross(u), n.setXYZ(h + 0, d.x, d.y, d.z), n.setXYZ(h + 1, d.x, d.y, d.z), n.setXYZ(h + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, d = o.itemSize, u = o.normalized, h = new c.constructor(l.length * d);
      let f = 0, g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        o.isInterleavedBufferAttribute ? f = l[_] * o.data.stride + o.offset : f = l[_] * d;
        for (let m = 0; m < d; m++)
          h[g++] = c[f++];
      }
      return new Et(h, d, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new $t(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let d = 0, u = c.length; d < u; d++) {
        const h = c[d], f = e(h, n);
        l.push(f);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let o = 0, l = r.length; o < l; o++) {
      const c = r[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], d = [];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u];
        d.push(f.toJSON(e.data));
      }
      d.length > 0 && (i[l] = d, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const d = i[c];
      this.setAttribute(c, d.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const d = [], u = s[c];
      for (let h = 0, f = u.length; h < f; h++)
        d.push(u[h].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const r = e.groups;
    for (let c = 0, d = r.length; c < d; c++) {
      const u = r[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Za = /* @__PURE__ */ new Le(), wn = /* @__PURE__ */ new ps(), Hi = /* @__PURE__ */ new Jt(), Ja = /* @__PURE__ */ new P(), Vi = /* @__PURE__ */ new P(), Wi = /* @__PURE__ */ new P(), ji = /* @__PURE__ */ new P(), Hs = /* @__PURE__ */ new P(), Xi = /* @__PURE__ */ new P(), Qa = /* @__PURE__ */ new P(), qi = /* @__PURE__ */ new P();
class bt extends at {
  constructor(e = new $t(), t = new Sn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, r = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Xi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = o[l], u = s[l];
        d !== 0 && (Hs.fromBufferAttribute(u, e), r ? Xi.addScaledVector(Hs, d) : Xi.addScaledVector(Hs.sub(t), d));
      }
      t.add(Xi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hi.copy(n.boundingSphere), Hi.applyMatrix4(s), wn.copy(e.ray).recast(e.near), !(Hi.containsPoint(wn.origin) === !1 && (wn.intersectSphere(Hi, Ja) === null || wn.origin.distanceToSquared(Ja) > (e.far - e.near) ** 2)) && (Za.copy(s).invert(), wn.copy(e.ray).applyMatrix4(Za), !(n.boundingBox !== null && wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, wn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, r = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, d = s.attributes.uv1, u = s.attributes.normal, h = s.groups, f = s.drawRange;
    if (o !== null)
      if (Array.isArray(r))
        for (let g = 0, _ = h.length; g < _; g++) {
          const p = h[g], m = r[p.materialIndex], x = Math.max(p.start, f.start), v = Math.min(o.count, Math.min(p.start + p.count, f.start + f.count));
          for (let T = x, E = v; T < E; T += 3) {
            const R = o.getX(T), w = o.getX(T + 1), D = o.getX(T + 2);
            i = Yi(this, m, e, n, c, d, u, R, w, D), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count);
        for (let p = g, m = _; p < m; p += 3) {
          const x = o.getX(p), v = o.getX(p + 1), T = o.getX(p + 2);
          i = Yi(this, r, e, n, c, d, u, x, v, T), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(r))
        for (let g = 0, _ = h.length; g < _; g++) {
          const p = h[g], m = r[p.materialIndex], x = Math.max(p.start, f.start), v = Math.min(l.count, Math.min(p.start + p.count, f.start + f.count));
          for (let T = x, E = v; T < E; T += 3) {
            const R = T, w = T + 1, D = T + 2;
            i = Yi(this, m, e, n, c, d, u, R, w, D), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
        for (let p = g, m = _; p < m; p += 3) {
          const x = p, v = p + 1, T = p + 2;
          i = Yi(this, r, e, n, c, d, u, x, v, T), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
  }
}
function pl(a, e, t, n, i, s, r, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(r, s, i, !0, o) : l = n.intersectTriangle(i, s, r, e.side === 0, o), l === null) return null;
  qi.copy(o), qi.applyMatrix4(a.matrixWorld);
  const c = t.ray.origin.distanceTo(qi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: qi.clone(),
    object: a
  };
}
function Yi(a, e, t, n, i, s, r, o, l, c) {
  a.getVertexPosition(o, Vi), a.getVertexPosition(l, Wi), a.getVertexPosition(c, ji);
  const d = pl(a, e, t, n, Vi, Wi, ji, Qa);
  if (d) {
    const u = new P();
    jt.getBarycoord(Qa, Vi, Wi, ji, u), i && (d.uv = jt.getInterpolatedAttribute(i, o, l, c, u, new De())), s && (d.uv1 = jt.getInterpolatedAttribute(s, o, l, c, u, new De())), r && (d.normal = jt.getInterpolatedAttribute(r, o, l, c, u, new P()), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: l,
      c,
      normal: new P(),
      materialIndex: 0
    };
    jt.getNormal(Vi, Wi, ji, h.normal), d.face = h, d.barycoord = u;
  }
  return d;
}
class Ci extends $t {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: r
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), r = Math.floor(r);
    const l = [], c = [], d = [], u = [];
    let h = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, r, s, 0), g("z", "y", "x", 1, -1, n, t, -e, r, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, r, 2), g("x", "z", "y", 1, -1, e, n, -t, i, r, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Yt(c, 3)), this.setAttribute("normal", new Yt(d, 3)), this.setAttribute("uv", new Yt(u, 2));
    function g(_, p, m, x, v, T, E, R, w, D, Y) {
      const b = T / w, y = E / D, B = T / 2, G = E / 2, V = R / 2, j = w + 1, O = D + 1;
      let K = 0, z = 0;
      const ie = new P();
      for (let ce = 0; ce < O; ce++) {
        const ge = ce * y - G;
        for (let Ne = 0; Ne < j; Ne++) {
          const se = Ne * b - B;
          ie[_] = se * x, ie[p] = ge * v, ie[m] = V, c.push(ie.x, ie.y, ie.z), ie[_] = 0, ie[p] = 0, ie[m] = R > 0 ? 1 : -1, d.push(ie.x, ie.y, ie.z), u.push(Ne / w), u.push(1 - ce / D), K += 1;
        }
      }
      for (let ce = 0; ce < D; ce++)
        for (let ge = 0; ge < w; ge++) {
          const Ne = h + ge + j * ce, se = h + ge + j * (ce + 1), H = h + (ge + 1) + j * (ce + 1), Z = h + (ge + 1) + j * ce;
          l.push(Ne, se, Z), l.push(se, H, Z), z += 6;
        }
      o.addGroup(f, z, Y), f += z, h += K;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ci(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ti(a) {
  const e = {};
  for (const t in a) {
    e[t] = {};
    for (const n in a[t]) {
      const i = a[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function At(a) {
  const e = {};
  for (let t = 0; t < a.length; t++) {
    const n = ti(a[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function ml(a) {
  const e = [];
  for (let t = 0; t < a.length; t++)
    e.push(a[t].clone());
  return e;
}
function so(a) {
  const e = a.getRenderTarget();
  return e === null ? a.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Xe.workingColorSpace;
}
const wi = { clone: ti, merge: At };
var gl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, _l = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class vt extends qt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = gl, this.fragmentShader = _l, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ti(e.uniforms), this.uniformsGroups = ml(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ao extends at {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Le(), this.projectionMatrix = new Le(), this.projectionMatrixInverse = new Le(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = /* @__PURE__ */ new P(), er = /* @__PURE__ */ new De(), tr = /* @__PURE__ */ new De();
class yt extends ao {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ei * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(yi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ei * 2 * Math.atan(
      Math.tan(yi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(vn.x, vn.y).multiplyScalar(-e / vn.z), vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(vn.x, vn.y).multiplyScalar(-e / vn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, er, tr), t.subVectors(tr, er);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, r) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(yi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = r.fullWidth, c = r.fullHeight;
      s += r.offsetX * i / l, t -= r.offsetY * n / c, i *= r.width / l, n *= r.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const qn = -90, Yn = 1;
class bl extends at {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new yt(qn, Yn, e, t);
    i.layers = this.layers, this.add(i);
    const s = new yt(qn, Yn, e, t);
    s.layers = this.layers, this.add(s);
    const r = new yt(qn, Yn, e, t);
    r.layers = this.layers, this.add(r);
    const o = new yt(qn, Yn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new yt(qn, Yn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new yt(qn, Yn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, r, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), r.up.set(0, 0, 1), r.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), r.up.set(0, 0, -1), r.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, r, o, l, c, d] = this.children, u = e.getRenderTarget(), h = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, r), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, d), e.setRenderTarget(u, h, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class ro extends gt {
  constructor(e, t, n, i, s, r, o, l, c, d) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, r, o, l, c, d), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class vl extends Rt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new ro(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Ci(5, 5, 5), s = new vt({
      name: "CubemapFromEquirect",
      uniforms: ti(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const r = new bt(i, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new bl(1, 10, this).update(e, r), t.minFilter = o, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let r = 0; r < 6; r++)
      e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Vs = /* @__PURE__ */ new P(), xl = /* @__PURE__ */ new P(), Ml = /* @__PURE__ */ new ze();
class Ln {
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Vs.subVectors(n, t).cross(xl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Vs), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Ml.getNormalMatrix(e), i = this.coplanarPoint(Vs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cn = /* @__PURE__ */ new Jt(), Ki = /* @__PURE__ */ new P();
class xa {
  constructor(e = new Ln(), t = new Ln(), n = new Ln(), i = new Ln(), s = new Ln(), r = new Ln()) {
    this.planes = [e, t, n, i, s, r];
  }
  set(e, t, n, i, s, r) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(r), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes, i = e.elements, s = i[0], r = i[1], o = i[2], l = i[3], c = i[4], d = i[5], u = i[6], h = i[7], f = i[8], g = i[9], _ = i[10], p = i[11], m = i[12], x = i[13], v = i[14], T = i[15];
    if (n[0].setComponents(l - s, h - c, p - f, T - m).normalize(), n[1].setComponents(l + s, h + c, p + f, T + m).normalize(), n[2].setComponents(l + r, h + d, p + g, T + x).normalize(), n[3].setComponents(l - r, h - d, p - g, T - x).normalize(), n[4].setComponents(l - o, h - u, p - _, T - v).normalize(), t === 2e3)
      n[5].setComponents(l + o, h + u, p + _, T + v).normalize();
    else if (t === 2001)
      n[5].setComponents(o, u, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Cn);
  }
  intersectsSprite(e) {
    return Cn.center.set(0, 0, 0), Cn.radius = 0.7071067811865476, Cn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Cn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Ki.x = i.normal.x > 0 ? e.max.x : e.min.x, Ki.y = i.normal.y > 0 ? e.max.y : e.min.y, Ki.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ki) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function oo() {
  let a = null, e = !1, t = null, n = null;
  function i(s, r) {
    t(s, r), n = a.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = a.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      a.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      a = s;
    }
  };
}
function Sl(a) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, d = o.usage, u = c.byteLength, h = a.createBuffer();
    a.bindBuffer(l, h), a.bufferData(l, c, d), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array)
      f = a.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = a.HALF_FLOAT : f = a.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      f = a.SHORT;
    else if (c instanceof Uint32Array)
      f = a.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      f = a.INT;
    else if (c instanceof Int8Array)
      f = a.BYTE;
    else if (c instanceof Uint8Array)
      f = a.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      f = a.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: h,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, l, c) {
    const d = l.array, u = l.updateRanges;
    if (a.bindBuffer(c, o), u.length === 0)
      a.bufferSubData(c, 0, d);
    else {
      u.sort((f, g) => f.start - g.start);
      let h = 0;
      for (let f = 1; f < u.length; f++) {
        const g = u[h], _ = u[f];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++h, u[h] = _);
      }
      u.length = h + 1;
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f];
        a.bufferSubData(
          c,
          _.start * d.BYTES_PER_ELEMENT,
          d,
          _.start,
          _.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (a.deleteBuffer(l.buffer), e.delete(o));
  }
  function r(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const d = e.get(o);
      (!d || d.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: i,
    remove: s,
    update: r
  };
}
class ni extends $t {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, r = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, d = l + 1, u = e / o, h = t / l, f = [], g = [], _ = [], p = [];
    for (let m = 0; m < d; m++) {
      const x = m * h - r;
      for (let v = 0; v < c; v++) {
        const T = v * u - s;
        g.push(T, -x, 0), _.push(0, 0, 1), p.push(v / o), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let x = 0; x < o; x++) {
        const v = x + c * m, T = x + c * (m + 1), E = x + 1 + c * (m + 1), R = x + 1 + c * m;
        f.push(v, T, R), f.push(T, E, R);
      }
    this.setIndex(f), this.setAttribute("position", new Yt(g, 3)), this.setAttribute("normal", new Yt(_, 3)), this.setAttribute("uv", new Yt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ni(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var yl = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Tl = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Al = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, El = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, wl = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Cl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Rl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Pl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Dl = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Ll = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Il = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ul = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Nl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Fl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, kl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Bl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ol = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Gl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, zl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Hl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Vl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Wl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, jl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Xl = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ql = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Yl = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Kl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, $l = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Zl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Jl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ql = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ec = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, tc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, nc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, ic = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, sc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ac = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, rc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, oc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, lc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, cc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, hc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, dc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, uc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, fc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, pc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, mc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, gc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, _c = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, bc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, vc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, xc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Mc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Sc = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, yc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Tc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Ac = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ec = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wc = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Cc = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Rc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Pc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Dc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Lc = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ic = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Uc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Nc = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Fc = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, kc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Bc = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Oc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Gc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, zc = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Hc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Wc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, jc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Xc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, qc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Yc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Kc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, $c = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Zc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Jc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Qc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, eh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, th = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, nh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, ih = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, sh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, ah = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, rh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, oh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, lh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ch = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, hh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, dh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, uh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, fh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ph = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, mh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, gh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, _h = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, bh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, vh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, xh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Mh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Sh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, yh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Th = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ah = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Eh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, wh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ch = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Rh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Ph = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Dh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Lh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ih = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Uh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Nh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Fh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, kh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Oh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, zh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Hh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Vh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Wh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, qh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Kh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $h = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Zh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Jh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Qh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, ed = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, td = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ge = {
  alphahash_fragment: yl,
  alphahash_pars_fragment: Tl,
  alphamap_fragment: Al,
  alphamap_pars_fragment: El,
  alphatest_fragment: wl,
  alphatest_pars_fragment: Cl,
  aomap_fragment: Rl,
  aomap_pars_fragment: Pl,
  batching_pars_vertex: Dl,
  batching_vertex: Ll,
  begin_vertex: Il,
  beginnormal_vertex: Ul,
  bsdfs: Nl,
  iridescence_fragment: Fl,
  bumpmap_pars_fragment: kl,
  clipping_planes_fragment: Bl,
  clipping_planes_pars_fragment: Ol,
  clipping_planes_pars_vertex: Gl,
  clipping_planes_vertex: zl,
  color_fragment: Hl,
  color_pars_fragment: Vl,
  color_pars_vertex: Wl,
  color_vertex: jl,
  common: Xl,
  cube_uv_reflection_fragment: ql,
  defaultnormal_vertex: Yl,
  displacementmap_pars_vertex: Kl,
  displacementmap_vertex: $l,
  emissivemap_fragment: Zl,
  emissivemap_pars_fragment: Jl,
  colorspace_fragment: Ql,
  colorspace_pars_fragment: ec,
  envmap_fragment: tc,
  envmap_common_pars_fragment: nc,
  envmap_pars_fragment: ic,
  envmap_pars_vertex: sc,
  envmap_physical_pars_fragment: mc,
  envmap_vertex: ac,
  fog_vertex: rc,
  fog_pars_vertex: oc,
  fog_fragment: lc,
  fog_pars_fragment: cc,
  gradientmap_pars_fragment: hc,
  lightmap_pars_fragment: dc,
  lights_lambert_fragment: uc,
  lights_lambert_pars_fragment: fc,
  lights_pars_begin: pc,
  lights_toon_fragment: gc,
  lights_toon_pars_fragment: _c,
  lights_phong_fragment: bc,
  lights_phong_pars_fragment: vc,
  lights_physical_fragment: xc,
  lights_physical_pars_fragment: Mc,
  lights_fragment_begin: Sc,
  lights_fragment_maps: yc,
  lights_fragment_end: Tc,
  logdepthbuf_fragment: Ac,
  logdepthbuf_pars_fragment: Ec,
  logdepthbuf_pars_vertex: wc,
  logdepthbuf_vertex: Cc,
  map_fragment: Rc,
  map_pars_fragment: Pc,
  map_particle_fragment: Dc,
  map_particle_pars_fragment: Lc,
  metalnessmap_fragment: Ic,
  metalnessmap_pars_fragment: Uc,
  morphinstance_vertex: Nc,
  morphcolor_vertex: Fc,
  morphnormal_vertex: kc,
  morphtarget_pars_vertex: Bc,
  morphtarget_vertex: Oc,
  normal_fragment_begin: Gc,
  normal_fragment_maps: zc,
  normal_pars_fragment: Hc,
  normal_pars_vertex: Vc,
  normal_vertex: Wc,
  normalmap_pars_fragment: jc,
  clearcoat_normal_fragment_begin: Xc,
  clearcoat_normal_fragment_maps: qc,
  clearcoat_pars_fragment: Yc,
  iridescence_pars_fragment: Kc,
  opaque_fragment: $c,
  packing: Zc,
  premultiplied_alpha_fragment: Jc,
  project_vertex: Qc,
  dithering_fragment: eh,
  dithering_pars_fragment: th,
  roughnessmap_fragment: nh,
  roughnessmap_pars_fragment: ih,
  shadowmap_pars_fragment: sh,
  shadowmap_pars_vertex: ah,
  shadowmap_vertex: rh,
  shadowmask_pars_fragment: oh,
  skinbase_vertex: lh,
  skinning_pars_vertex: ch,
  skinning_vertex: hh,
  skinnormal_vertex: dh,
  specularmap_fragment: uh,
  specularmap_pars_fragment: fh,
  tonemapping_fragment: ph,
  tonemapping_pars_fragment: mh,
  transmission_fragment: gh,
  transmission_pars_fragment: _h,
  uv_pars_fragment: bh,
  uv_pars_vertex: vh,
  uv_vertex: xh,
  worldpos_vertex: Mh,
  background_vert: Sh,
  background_frag: yh,
  backgroundCube_vert: Th,
  backgroundCube_frag: Ah,
  cube_vert: Eh,
  cube_frag: wh,
  depth_vert: Ch,
  depth_frag: Rh,
  distanceRGBA_vert: Ph,
  distanceRGBA_frag: Dh,
  equirect_vert: Lh,
  equirect_frag: Ih,
  linedashed_vert: Uh,
  linedashed_frag: Nh,
  meshbasic_vert: Fh,
  meshbasic_frag: kh,
  meshlambert_vert: Bh,
  meshlambert_frag: Oh,
  meshmatcap_vert: Gh,
  meshmatcap_frag: zh,
  meshnormal_vert: Hh,
  meshnormal_frag: Vh,
  meshphong_vert: Wh,
  meshphong_frag: jh,
  meshphysical_vert: Xh,
  meshphysical_frag: qh,
  meshtoon_vert: Yh,
  meshtoon_frag: Kh,
  points_vert: $h,
  points_frag: Zh,
  shadow_vert: Jh,
  shadow_frag: Qh,
  sprite_vert: ed,
  sprite_frag: td
}, oe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new ze() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new ze() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new ze() },
    normalScale: { value: /* @__PURE__ */ new De(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new ze() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new re(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ze() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new De(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  }
}, Zt = {
  basic: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Ge.meshbasic_vert,
    fragmentShader: Ge.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) }
      }
    ]),
    vertexShader: Ge.meshlambert_vert,
    fragmentShader: Ge.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) },
        specular: { value: /* @__PURE__ */ new re(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ge.meshphong_vert,
    fragmentShader: Ge.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.roughnessmap,
      oe.metalnessmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshphysical_vert,
    fragmentShader: Ge.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.gradientmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) }
      }
    ]),
    vertexShader: Ge.meshtoon_vert,
    fragmentShader: Ge.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ge.meshmatcap_vert,
    fragmentShader: Ge.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ At([
      oe.points,
      oe.fog
    ]),
    vertexShader: Ge.points_vert,
    fragmentShader: Ge.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ge.linedashed_vert,
    fragmentShader: Ge.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Ge.depth_vert,
    fragmentShader: Ge.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshnormal_vert,
    fragmentShader: Ge.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ At([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Ge.sprite_vert,
    fragmentShader: Ge.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new ze() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ge.background_vert,
    fragmentShader: Ge.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new ze() }
    },
    vertexShader: Ge.backgroundCube_vert,
    fragmentShader: Ge.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ge.cube_vert,
    fragmentShader: Ge.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ge.equirect_vert,
    fragmentShader: Ge.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ At([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ge.distanceRGBA_vert,
    fragmentShader: Ge.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ At([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new re(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.shadow_vert,
    fragmentShader: Ge.shadow_frag
  }
};
Zt.physical = {
  uniforms: /* @__PURE__ */ At([
    Zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new De(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new ze() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new re(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new ze() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new ze() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new De() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new re(0) },
      specularColor: { value: /* @__PURE__ */ new re(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new ze() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new ze() },
      anisotropyVector: { value: /* @__PURE__ */ new De() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new ze() }
    }
  ]),
  vertexShader: Ge.meshphysical_vert,
  fragmentShader: Ge.meshphysical_frag
};
const $i = { r: 0, b: 0, g: 0 }, Rn = /* @__PURE__ */ new Kt(), nd = /* @__PURE__ */ new Le();
function id(a, e, t, n, i, s, r) {
  const o = new re(0);
  let l = s === !0 ? 0 : 1, c, d, u = null, h = 0, f = null;
  function g(x) {
    let v = x.isScene === !0 ? x.background : null;
    return v && v.isTexture && (v = (x.backgroundBlurriness > 0 ? t : e).get(v)), v;
  }
  function _(x) {
    let v = !1;
    const T = g(x);
    T === null ? m(o, l) : T && T.isColor && (m(T, 1), v = !0);
    const E = a.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, r) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, r), (a.autoClear || v) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil));
  }
  function p(x, v) {
    const T = g(v);
    T && (T.isCubeTexture || T.mapping === 306) ? (d === void 0 && (d = new bt(
      new Ci(1, 1, 1),
      new vt({
        name: "BackgroundCubeMaterial",
        uniforms: ti(Zt.backgroundCube.uniforms),
        vertexShader: Zt.backgroundCube.vertexShader,
        fragmentShader: Zt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function(E, R, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(d.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(d)), Rn.copy(v.backgroundRotation), Rn.x *= -1, Rn.y *= -1, Rn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (Rn.y *= -1, Rn.z *= -1), d.material.uniforms.envMap.value = T, d.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, d.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, d.material.uniforms.backgroundRotation.value.setFromMatrix4(nd.makeRotationFromEuler(Rn)), d.material.toneMapped = Xe.getTransfer(T.colorSpace) !== nt, (u !== T || h !== T.version || f !== a.toneMapping) && (d.material.needsUpdate = !0, u = T, h = T.version, f = a.toneMapping), d.layers.enableAll(), x.unshift(d, d.geometry, d.material, 0, 0, null)) : T && T.isTexture && (c === void 0 && (c = new bt(
      new ni(2, 2),
      new vt({
        name: "BackgroundMaterial",
        uniforms: ti(Zt.background.uniforms),
        vertexShader: Zt.background.vertexShader,
        fragmentShader: Zt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = T, c.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, c.material.toneMapped = Xe.getTransfer(T.colorSpace) !== nt, T.matrixAutoUpdate === !0 && T.updateMatrix(), c.material.uniforms.uvTransform.value.copy(T.matrix), (u !== T || h !== T.version || f !== a.toneMapping) && (c.material.needsUpdate = !0, u = T, h = T.version, f = a.toneMapping), c.layers.enableAll(), x.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(x, v) {
    x.getRGB($i, so(a)), n.buffers.color.setClear($i.r, $i.g, $i.b, v, r);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(x, v = 1) {
      o.set(x), l = v, m(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(x) {
      l = x, m(o, l);
    },
    render: _,
    addToRenderList: p
  };
}
function sd(a, e) {
  const t = a.getParameter(a.MAX_VERTEX_ATTRIBS), n = {}, i = h(null);
  let s = i, r = !1;
  function o(b, y, B, G, V) {
    let j = !1;
    const O = u(G, B, y);
    s !== O && (s = O, c(s.object)), j = f(b, G, B, V), j && g(b, G, B, V), V !== null && e.update(V, a.ELEMENT_ARRAY_BUFFER), (j || r) && (r = !1, T(b, y, B, G), V !== null && a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, e.get(V).buffer));
  }
  function l() {
    return a.createVertexArray();
  }
  function c(b) {
    return a.bindVertexArray(b);
  }
  function d(b) {
    return a.deleteVertexArray(b);
  }
  function u(b, y, B) {
    const G = B.wireframe === !0;
    let V = n[b.id];
    V === void 0 && (V = {}, n[b.id] = V);
    let j = V[y.id];
    j === void 0 && (j = {}, V[y.id] = j);
    let O = j[G];
    return O === void 0 && (O = h(l()), j[G] = O), O;
  }
  function h(b) {
    const y = [], B = [], G = [];
    for (let V = 0; V < t; V++)
      y[V] = 0, B[V] = 0, G[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: y,
      enabledAttributes: B,
      attributeDivisors: G,
      object: b,
      attributes: {},
      index: null
    };
  }
  function f(b, y, B, G) {
    const V = s.attributes, j = y.attributes;
    let O = 0;
    const K = B.getAttributes();
    for (const z in K)
      if (K[z].location >= 0) {
        const ce = V[z];
        let ge = j[z];
        if (ge === void 0 && (z === "instanceMatrix" && b.instanceMatrix && (ge = b.instanceMatrix), z === "instanceColor" && b.instanceColor && (ge = b.instanceColor)), ce === void 0 || ce.attribute !== ge || ge && ce.data !== ge.data) return !0;
        O++;
      }
    return s.attributesNum !== O || s.index !== G;
  }
  function g(b, y, B, G) {
    const V = {}, j = y.attributes;
    let O = 0;
    const K = B.getAttributes();
    for (const z in K)
      if (K[z].location >= 0) {
        let ce = j[z];
        ce === void 0 && (z === "instanceMatrix" && b.instanceMatrix && (ce = b.instanceMatrix), z === "instanceColor" && b.instanceColor && (ce = b.instanceColor));
        const ge = {};
        ge.attribute = ce, ce && ce.data && (ge.data = ce.data), V[z] = ge, O++;
      }
    s.attributes = V, s.attributesNum = O, s.index = G;
  }
  function _() {
    const b = s.newAttributes;
    for (let y = 0, B = b.length; y < B; y++)
      b[y] = 0;
  }
  function p(b) {
    m(b, 0);
  }
  function m(b, y) {
    const B = s.newAttributes, G = s.enabledAttributes, V = s.attributeDivisors;
    B[b] = 1, G[b] === 0 && (a.enableVertexAttribArray(b), G[b] = 1), V[b] !== y && (a.vertexAttribDivisor(b, y), V[b] = y);
  }
  function x() {
    const b = s.newAttributes, y = s.enabledAttributes;
    for (let B = 0, G = y.length; B < G; B++)
      y[B] !== b[B] && (a.disableVertexAttribArray(B), y[B] = 0);
  }
  function v(b, y, B, G, V, j, O) {
    O === !0 ? a.vertexAttribIPointer(b, y, B, V, j) : a.vertexAttribPointer(b, y, B, G, V, j);
  }
  function T(b, y, B, G) {
    _();
    const V = G.attributes, j = B.getAttributes(), O = y.defaultAttributeValues;
    for (const K in j) {
      const z = j[K];
      if (z.location >= 0) {
        let ie = V[K];
        if (ie === void 0 && (K === "instanceMatrix" && b.instanceMatrix && (ie = b.instanceMatrix), K === "instanceColor" && b.instanceColor && (ie = b.instanceColor)), ie !== void 0) {
          const ce = ie.normalized, ge = ie.itemSize, Ne = e.get(ie);
          if (Ne === void 0) continue;
          const se = Ne.buffer, H = Ne.type, Z = Ne.bytesPerElement, _e = H === a.INT || H === a.UNSIGNED_INT || ie.gpuType === 1013;
          if (ie.isInterleavedBufferAttribute) {
            const ae = ie.data, Q = ae.stride, ee = ie.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let he = 0; he < z.locationSize; he++)
                m(z.location + he, ae.meshPerAttribute);
              b.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let he = 0; he < z.locationSize; he++)
                p(z.location + he);
            a.bindBuffer(a.ARRAY_BUFFER, se);
            for (let he = 0; he < z.locationSize; he++)
              v(
                z.location + he,
                ge / z.locationSize,
                H,
                ce,
                Q * Z,
                (ee + ge / z.locationSize * he) * Z,
                _e
              );
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let ae = 0; ae < z.locationSize; ae++)
                m(z.location + ae, ie.meshPerAttribute);
              b.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let ae = 0; ae < z.locationSize; ae++)
                p(z.location + ae);
            a.bindBuffer(a.ARRAY_BUFFER, se);
            for (let ae = 0; ae < z.locationSize; ae++)
              v(
                z.location + ae,
                ge / z.locationSize,
                H,
                ce,
                ge * Z,
                ge / z.locationSize * ae * Z,
                _e
              );
          }
        } else if (O !== void 0) {
          const ce = O[K];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                a.vertexAttrib2fv(z.location, ce);
                break;
              case 3:
                a.vertexAttrib3fv(z.location, ce);
                break;
              case 4:
                a.vertexAttrib4fv(z.location, ce);
                break;
              default:
                a.vertexAttrib1fv(z.location, ce);
            }
        }
      }
    }
    x();
  }
  function E() {
    D();
    for (const b in n) {
      const y = n[b];
      for (const B in y) {
        const G = y[B];
        for (const V in G)
          d(G[V].object), delete G[V];
        delete y[B];
      }
      delete n[b];
    }
  }
  function R(b) {
    if (n[b.id] === void 0) return;
    const y = n[b.id];
    for (const B in y) {
      const G = y[B];
      for (const V in G)
        d(G[V].object), delete G[V];
      delete y[B];
    }
    delete n[b.id];
  }
  function w(b) {
    for (const y in n) {
      const B = n[y];
      if (B[b.id] === void 0) continue;
      const G = B[b.id];
      for (const V in G)
        d(G[V].object), delete G[V];
      delete B[b.id];
    }
  }
  function D() {
    Y(), r = !0, s !== i && (s = i, c(s.object));
  }
  function Y() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: D,
    resetDefaultState: Y,
    dispose: E,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: w,
    initAttributes: _,
    enableAttribute: p,
    disableUnusedAttributes: x
  };
}
function ad(a, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function s(c, d) {
    a.drawArrays(n, c, d), t.update(d, n, 1);
  }
  function r(c, d, u) {
    u !== 0 && (a.drawArraysInstanced(n, c, d, u), t.update(d, n, u));
  }
  function o(c, d, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, d, 0, u);
    let f = 0;
    for (let g = 0; g < u; g++)
      f += d[g];
    t.update(f, n, 1);
  }
  function l(c, d, u, h) {
    if (u === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let g = 0; g < c.length; g++)
        r(c[g], d[g], h[g]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, d, 0, h, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++)
        g += d[_];
      for (let _ = 0; _ < h.length; _++)
        t.update(g, n, h[_]);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = r, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function rd(a, e, t, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      i = a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function r(w) {
    return !(w !== 1023 && n.convert(w) !== a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const D = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !D);
  }
  function l(w) {
    if (w === "highp") {
      if (a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision > 0 && a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision > 0 && a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const d = l(c);
  d !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", d, "instead."), c = d);
  const u = t.logarithmicDepthBuffer === !0, h = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (h === !0) {
    const w = e.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const f = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS), g = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = a.getParameter(a.MAX_TEXTURE_SIZE), p = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE), m = a.getParameter(a.MAX_VERTEX_ATTRIBS), x = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS), v = a.getParameter(a.MAX_VARYING_VECTORS), T = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS), E = g > 0, R = a.getParameter(a.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: r,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: h,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: p,
    maxAttributes: m,
    maxVertexUniforms: x,
    maxVaryings: v,
    maxFragmentUniforms: T,
    vertexTextures: E,
    maxSamples: R
  };
}
function od(a) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const r = new Ln(), o = new ze(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, h) {
    const f = u.length !== 0 || h || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = h, n = u.length, f;
  }, this.beginShadows = function() {
    s = !0, d(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, h) {
    t = d(u, h, 0);
  }, this.setState = function(u, h, f) {
    const g = u.clippingPlanes, _ = u.clipIntersection, p = u.clipShadows, m = a.get(u);
    if (!i || g === null || g.length === 0 || s && !p)
      s ? d(null) : c();
    else {
      const x = s ? 0 : n, v = x * 4;
      let T = m.clippingState || null;
      l.value = T, T = d(g, h, v, f);
      for (let E = 0; E !== v; ++E)
        T[E] = t[E];
      m.clippingState = T, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function d(u, h, f, g) {
    const _ = u !== null ? u.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const m = f + _ * 4, x = h.matrixWorldInverse;
        o.getNormalMatrix(x), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let v = 0, T = f; v !== _; ++v, T += 4)
          r.copy(u[v]).applyMatrix4(x, o), r.normal.toArray(p, T), p[T + 3] = r.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, p;
  }
}
function ld(a) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, o) {
    return o === 303 ? r.mapping = 301 : o === 304 && (r.mapping = 302), r;
  }
  function n(r) {
    if (r && r.isTexture) {
      const o = r.mapping;
      if (o === 303 || o === 304)
        if (e.has(r)) {
          const l = e.get(r).texture;
          return t(l, r.mapping);
        } else {
          const l = r.image;
          if (l && l.height > 0) {
            const c = new vl(l.height);
            return c.fromEquirectangularTexture(a, r), e.set(r, c), r.addEventListener("dispose", i), t(c.texture, r.mapping);
          } else
            return null;
        }
    }
    return r;
  }
  function i(r) {
    const o = r.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Ri extends ao {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = r, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, r) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, r = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, r = s + c * this.view.width, o -= d * this.view.offsetY, l = o - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, r, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Zn = 4, nr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Un = 20, Ws = /* @__PURE__ */ new Ri(), ir = /* @__PURE__ */ new re();
let js = null, Xs = 0, qs = 0, Ys = !1;
const In = (1 + Math.sqrt(5)) / 2, Kn = 1 / In, sr = [
  /* @__PURE__ */ new P(-In, Kn, 0),
  /* @__PURE__ */ new P(In, Kn, 0),
  /* @__PURE__ */ new P(-Kn, 0, In),
  /* @__PURE__ */ new P(Kn, 0, In),
  /* @__PURE__ */ new P(0, In, -Kn),
  /* @__PURE__ */ new P(0, In, Kn),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, 1)
];
class ra {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    js = this._renderer.getRenderTarget(), Xs = this._renderer.getActiveCubeFace(), qs = this._renderer.getActiveMipmapLevel(), Ys = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = or(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = rr(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(js, Xs, qs), this._renderer.xr.enabled = Ys, e.scissorTest = !1, Zi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), js = this._renderer.getRenderTarget(), Xs = this._renderer.getActiveCubeFace(), qs = this._renderer.getActiveMipmapLevel(), Ys = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: dt,
      depthBuffer: !1
    }, i = ar(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ar(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = cd(s)), this._blurMaterial = hd(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new bt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ws);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new yt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], d = this._renderer, u = d.autoClear, h = d.toneMapping;
    d.getClearColor(ir), d.toneMapping = 0, d.autoClear = !1;
    const f = new Sn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new bt(new Ci(), f);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (f.color.copy(p), e.background = null, _ = !0) : (f.color.copy(ir), _ = !0);
    for (let m = 0; m < 6; m++) {
      const x = m % 3;
      x === 0 ? (o.up.set(0, l[m], 0), o.lookAt(c[m], 0, 0)) : x === 1 ? (o.up.set(0, 0, l[m]), o.lookAt(0, c[m], 0)) : (o.up.set(0, l[m], 0), o.lookAt(0, 0, c[m]));
      const v = this._cubeSize;
      Zi(i, x * v, m > 2 ? v : 0, v, v), d.setRenderTarget(i), _ && d.render(g, o), d.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), d.toneMapping = h, d.autoClear = u, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = or()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = rr());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, r = new bt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Zi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(r, Ws);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const r = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = sr[(i - s - 1) % sr.length];
      this._blur(e, s - 1, s, r, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const r = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      r,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      r,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, r, o) {
    const l = this._renderer, c = this._blurMaterial;
    r !== "latitudinal" && r !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const d = 3, u = new bt(this._lodPlanes[i], c), h = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Un - 1), _ = s / g, p = isFinite(s) ? 1 + Math.floor(d * _) : Un;
    p > Un && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Un}`);
    const m = [];
    let x = 0;
    for (let w = 0; w < Un; ++w) {
      const D = w / _, Y = Math.exp(-D * D / 2);
      m.push(Y), w === 0 ? x += Y : w < p && (x += 2 * Y);
    }
    for (let w = 0; w < m.length; w++)
      m[w] = m[w] / x;
    h.envMap.value = e.texture, h.samples.value = p, h.weights.value = m, h.latitudinal.value = r === "latitudinal", o && (h.poleAxis.value = o);
    const { _lodMax: v } = this;
    h.dTheta.value = g, h.mipInt.value = v - n;
    const T = this._sizeLods[i], E = 3 * T * (i > v - Zn ? i - v + Zn : 0), R = 4 * (this._cubeSize - T);
    Zi(t, E, R, 3 * T, 2 * T), l.setRenderTarget(t), l.render(u, Ws);
  }
}
function cd(a) {
  const e = [], t = [], n = [];
  let i = a;
  const s = a - Zn + 1 + nr.length;
  for (let r = 0; r < s; r++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    r > a - Zn ? l = nr[r - a + Zn - 1] : r === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), d = -c, u = 1 + c, h = [d, d, u, d, u, u, d, d, u, u, d, u], f = 6, g = 6, _ = 3, p = 2, m = 1, x = new Float32Array(_ * g * f), v = new Float32Array(p * g * f), T = new Float32Array(m * g * f);
    for (let R = 0; R < f; R++) {
      const w = R % 3 * 2 / 3 - 1, D = R > 2 ? 0 : -1, Y = [
        w,
        D,
        0,
        w + 2 / 3,
        D,
        0,
        w + 2 / 3,
        D + 1,
        0,
        w,
        D,
        0,
        w + 2 / 3,
        D + 1,
        0,
        w,
        D + 1,
        0
      ];
      x.set(Y, _ * g * R), v.set(h, p * g * R);
      const b = [R, R, R, R, R, R];
      T.set(b, m * g * R);
    }
    const E = new $t();
    E.setAttribute("position", new Et(x, _)), E.setAttribute("uv", new Et(v, p)), E.setAttribute("faceIndex", new Et(T, m)), e.push(E), i > Zn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ar(a, e, t) {
  const n = new Rt(a, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Zi(a, e, t, n, i) {
  a.viewport.set(e, t, n, i), a.scissor.set(e, t, n, i);
}
function hd(a, e, t) {
  const n = new Float32Array(Un), i = new P(0, 1, 0);
  return new vt({
    name: "SphericalGaussianBlur",
    defines: {
      n: Un,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${a}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Ma(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function rr() {
  return new vt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ma(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function or() {
  return new vt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ma(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ma() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function dd(a) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, d = l === 301 || l === 302;
      if (c || d) {
        let u = e.get(o);
        const h = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== h)
          return t === null && (t = new ra(a)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const f = o.image;
          return c && f && f.height > 0 || d && f && i(f) ? (t === null && (t = new ra(a)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let d = 0; d < c; d++)
      o[d] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: r
  };
}
function ud(a) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && rs("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function fd(a, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function r(u) {
    const h = u.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes)
      e.remove(h.attributes[g]);
    for (const g in h.morphAttributes) {
      const _ = h.morphAttributes[g];
      for (let p = 0, m = _.length; p < m; p++)
        e.remove(_[p]);
    }
    h.removeEventListener("dispose", r), delete i[h.id];
    const f = s.get(h);
    f && (e.remove(f), s.delete(h)), n.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, h) {
    return i[h.id] === !0 || (h.addEventListener("dispose", r), i[h.id] = !0, t.memory.geometries++), h;
  }
  function l(u) {
    const h = u.attributes;
    for (const g in h)
      e.update(h[g], a.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const g in f) {
      const _ = f[g];
      for (let p = 0, m = _.length; p < m; p++)
        e.update(_[p], a.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const h = [], f = u.index, g = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const x = f.array;
      _ = f.version;
      for (let v = 0, T = x.length; v < T; v += 3) {
        const E = x[v + 0], R = x[v + 1], w = x[v + 2];
        h.push(E, R, R, w, w, E);
      }
    } else if (g !== void 0) {
      const x = g.array;
      _ = g.version;
      for (let v = 0, T = x.length / 3 - 1; v < T; v += 3) {
        const E = v + 0, R = v + 1, w = v + 2;
        h.push(E, R, R, w, w, E);
      }
    } else
      return;
    const p = new (Zr(h) ? io : no)(h, 1);
    p.version = _;
    const m = s.get(u);
    m && e.remove(m), s.set(u, p);
  }
  function d(u) {
    const h = s.get(u);
    if (h) {
      const f = u.index;
      f !== null && h.version < f.version && c(u);
    } else
      c(u);
    return s.get(u);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: d
  };
}
function pd(a, e, t) {
  let n;
  function i(h) {
    n = h;
  }
  let s, r;
  function o(h) {
    s = h.type, r = h.bytesPerElement;
  }
  function l(h, f) {
    a.drawElements(n, f, s, h * r), t.update(f, n, 1);
  }
  function c(h, f, g) {
    g !== 0 && (a.drawElementsInstanced(n, f, s, h * r, g), t.update(f, n, g));
  }
  function d(h, f, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, h, 0, g);
    let p = 0;
    for (let m = 0; m < g; m++)
      p += f[m];
    t.update(p, n, 1);
  }
  function u(h, f, g, _) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let m = 0; m < h.length; m++)
        c(h[m] / r, f[m], _[m]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, f, 0, s, h, 0, _, 0, g);
      let m = 0;
      for (let x = 0; x < g; x++)
        m += f[x];
      for (let x = 0; x < _.length; x++)
        t.update(m, n, _[x]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = d, this.renderMultiDrawInstances = u;
}
function md(a) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, r, o) {
    switch (t.calls++, r) {
      case a.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case a.LINES:
        t.lines += o * (s / 2);
        break;
      case a.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case a.LINE_LOOP:
        t.lines += o * s;
        break;
      case a.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function gd(a, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ve();
  function s(r, o, l) {
    const c = r.morphTargetInfluences, d = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = d !== void 0 ? d.length : 0;
    let h = n.get(o);
    if (h === void 0 || h.count !== u) {
      let b = function() {
        D.dispose(), n.delete(o), o.removeEventListener("dispose", b);
      };
      var f = b;
      h !== void 0 && h.texture.dispose();
      const g = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], x = o.morphAttributes.normal || [], v = o.morphAttributes.color || [];
      let T = 0;
      g === !0 && (T = 1), _ === !0 && (T = 2), p === !0 && (T = 3);
      let E = o.attributes.position.count * T, R = 1;
      E > e.maxTextureSize && (R = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const w = new Float32Array(E * R * 4 * u), D = new Qr(w, E, R, u);
      D.type = 1015, D.needsUpdate = !0;
      const Y = T * 4;
      for (let y = 0; y < u; y++) {
        const B = m[y], G = x[y], V = v[y], j = E * R * 4 * y;
        for (let O = 0; O < B.count; O++) {
          const K = O * Y;
          g === !0 && (i.fromBufferAttribute(B, O), w[j + K + 0] = i.x, w[j + K + 1] = i.y, w[j + K + 2] = i.z, w[j + K + 3] = 0), _ === !0 && (i.fromBufferAttribute(G, O), w[j + K + 4] = i.x, w[j + K + 5] = i.y, w[j + K + 6] = i.z, w[j + K + 7] = 0), p === !0 && (i.fromBufferAttribute(V, O), w[j + K + 8] = i.x, w[j + K + 9] = i.y, w[j + K + 10] = i.z, w[j + K + 11] = V.itemSize === 4 ? i.w : 1);
        }
      }
      h = {
        count: u,
        texture: D,
        size: new De(E, R)
      }, n.set(o, h), o.addEventListener("dispose", b);
    }
    if (r.isInstancedMesh === !0 && r.morphTexture !== null)
      l.getUniforms().setValue(a, "morphTexture", r.morphTexture, t);
    else {
      let g = 0;
      for (let p = 0; p < c.length; p++)
        g += c[p];
      const _ = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(a, "morphTargetBaseInfluence", _), l.getUniforms().setValue(a, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(a, "morphTargetsTexture", h.texture, t), l.getUniforms().setValue(a, "morphTargetsTextureSize", h.size);
  }
  return {
    update: s
  };
}
function _d(a, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, d = l.geometry, u = e.get(l, d);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, a.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, a.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const h = l.skeleton;
      i.get(h) !== c && (h.update(), i.set(h, c));
    }
    return u;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: r
  };
}
class lo extends gt {
  constructor(e, t, n, i, s, r, o, l, c, d = 1026) {
    if (d !== 1026 && d !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && d === 1026 && (n = 1014), n === void 0 && d === 1027 && (n = 1020), super(null, i, s, r, o, l, d, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const co = /* @__PURE__ */ new gt(), lr = /* @__PURE__ */ new lo(1, 1), ho = /* @__PURE__ */ new Qr(), uo = /* @__PURE__ */ new sl(), fo = /* @__PURE__ */ new ro(), cr = [], hr = [], dr = new Float32Array(16), ur = new Float32Array(9), fr = new Float32Array(4);
function oi(a, e, t) {
  const n = a[0];
  if (n <= 0 || n > 0) return a;
  const i = e * t;
  let s = cr[i];
  if (s === void 0 && (s = new Float32Array(i), cr[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let r = 1, o = 0; r !== e; ++r)
      o += t, a[r].toArray(s, o);
  }
  return s;
}
function ut(a, e) {
  if (a.length !== e.length) return !1;
  for (let t = 0, n = a.length; t < n; t++)
    if (a[t] !== e[t]) return !1;
  return !0;
}
function ft(a, e) {
  for (let t = 0, n = e.length; t < n; t++)
    a[t] = e[t];
}
function ms(a, e) {
  let t = hr[e];
  t === void 0 && (t = new Int32Array(e), hr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = a.allocateTextureUnit();
  return t;
}
function bd(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1f(this.addr, e), t[0] = e);
}
function vd(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    a.uniform2fv(this.addr, e), ft(t, e);
  }
}
function xd(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (a.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ut(t, e)) return;
    a.uniform3fv(this.addr, e), ft(t, e);
  }
}
function Md(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    a.uniform4fv(this.addr, e), ft(t, e);
  }
}
function Sd(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    a.uniformMatrix2fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ut(t, n)) return;
    fr.set(n), a.uniformMatrix2fv(this.addr, !1, fr), ft(t, n);
  }
}
function yd(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    a.uniformMatrix3fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ut(t, n)) return;
    ur.set(n), a.uniformMatrix3fv(this.addr, !1, ur), ft(t, n);
  }
}
function Td(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    a.uniformMatrix4fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ut(t, n)) return;
    dr.set(n), a.uniformMatrix4fv(this.addr, !1, dr), ft(t, n);
  }
}
function Ad(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1i(this.addr, e), t[0] = e);
}
function Ed(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    a.uniform2iv(this.addr, e), ft(t, e);
  }
}
function wd(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    a.uniform3iv(this.addr, e), ft(t, e);
  }
}
function Cd(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    a.uniform4iv(this.addr, e), ft(t, e);
  }
}
function Rd(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1ui(this.addr, e), t[0] = e);
}
function Pd(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    a.uniform2uiv(this.addr, e), ft(t, e);
  }
}
function Dd(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    a.uniform3uiv(this.addr, e), ft(t, e);
  }
}
function Ld(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    a.uniform4uiv(this.addr, e), ft(t, e);
  }
}
function Id(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === a.SAMPLER_2D_SHADOW ? (lr.compareFunction = 515, s = lr) : s = co, t.setTexture2D(e || s, i);
}
function Ud(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || uo, i);
}
function Nd(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || fo, i);
}
function Fd(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ho, i);
}
function kd(a) {
  switch (a) {
    case 5126:
      return bd;
    case 35664:
      return vd;
    case 35665:
      return xd;
    case 35666:
      return Md;
    case 35674:
      return Sd;
    case 35675:
      return yd;
    case 35676:
      return Td;
    case 5124:
    case 35670:
      return Ad;
    case 35667:
    case 35671:
      return Ed;
    case 35668:
    case 35672:
      return wd;
    case 35669:
    case 35673:
      return Cd;
    case 5125:
      return Rd;
    case 36294:
      return Pd;
    case 36295:
      return Dd;
    case 36296:
      return Ld;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Id;
    case 35679:
    case 36299:
    case 36307:
      return Ud;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Nd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fd;
  }
}
function Bd(a, e) {
  a.uniform1fv(this.addr, e);
}
function Od(a, e) {
  const t = oi(e, this.size, 2);
  a.uniform2fv(this.addr, t);
}
function Gd(a, e) {
  const t = oi(e, this.size, 3);
  a.uniform3fv(this.addr, t);
}
function zd(a, e) {
  const t = oi(e, this.size, 4);
  a.uniform4fv(this.addr, t);
}
function Hd(a, e) {
  const t = oi(e, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, t);
}
function Vd(a, e) {
  const t = oi(e, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, t);
}
function Wd(a, e) {
  const t = oi(e, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, t);
}
function jd(a, e) {
  a.uniform1iv(this.addr, e);
}
function Xd(a, e) {
  a.uniform2iv(this.addr, e);
}
function qd(a, e) {
  a.uniform3iv(this.addr, e);
}
function Yd(a, e) {
  a.uniform4iv(this.addr, e);
}
function Kd(a, e) {
  a.uniform1uiv(this.addr, e);
}
function $d(a, e) {
  a.uniform2uiv(this.addr, e);
}
function Zd(a, e) {
  a.uniform3uiv(this.addr, e);
}
function Jd(a, e) {
  a.uniform4uiv(this.addr, e);
}
function Qd(a, e, t) {
  const n = this.cache, i = e.length, s = ms(t, i);
  ut(n, s) || (a.uniform1iv(this.addr, s), ft(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2D(e[r] || co, s[r]);
}
function eu(a, e, t) {
  const n = this.cache, i = e.length, s = ms(t, i);
  ut(n, s) || (a.uniform1iv(this.addr, s), ft(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture3D(e[r] || uo, s[r]);
}
function tu(a, e, t) {
  const n = this.cache, i = e.length, s = ms(t, i);
  ut(n, s) || (a.uniform1iv(this.addr, s), ft(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTextureCube(e[r] || fo, s[r]);
}
function nu(a, e, t) {
  const n = this.cache, i = e.length, s = ms(t, i);
  ut(n, s) || (a.uniform1iv(this.addr, s), ft(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2DArray(e[r] || ho, s[r]);
}
function iu(a) {
  switch (a) {
    case 5126:
      return Bd;
    case 35664:
      return Od;
    case 35665:
      return Gd;
    case 35666:
      return zd;
    case 35674:
      return Hd;
    case 35675:
      return Vd;
    case 35676:
      return Wd;
    case 5124:
    case 35670:
      return jd;
    case 35667:
    case 35671:
      return Xd;
    case 35668:
    case 35672:
      return qd;
    case 35669:
    case 35673:
      return Yd;
    case 5125:
      return Kd;
    case 36294:
      return $d;
    case 36295:
      return Zd;
    case 36296:
      return Jd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qd;
    case 35679:
    case 36299:
    case 36307:
      return eu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return tu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nu;
  }
}
class su {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = kd(t.type);
  }
}
class au {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = iu(t.type);
  }
}
class ru {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, r = i.length; s !== r; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Ks = /(\w+)(\])?(\[|\.)?/g;
function pr(a, e) {
  a.seq.push(e), a.map[e.id] = e;
}
function ou(a, e, t) {
  const n = a.name, i = n.length;
  for (Ks.lastIndex = 0; ; ) {
    const s = Ks.exec(n), r = Ks.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && r + 2 === i) {
      pr(t, c === void 0 ? new su(o, a, e) : new au(o, a, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new ru(o), pr(t, u)), t = u;
    }
  }
}
class os {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), r = e.getUniformLocation(t, s.name);
      ou(s, r, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, r = t.length; s !== r; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function mr(a, e, t) {
  const n = a.createShader(e);
  return a.shaderSource(n, t), a.compileShader(n), n;
}
const lu = 37297;
let cu = 0;
function hu(a, e) {
  const t = a.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let r = i; r < s; r++) {
    const o = r + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[r]}`);
  }
  return n.join(`
`);
}
function du(a) {
  const e = Xe.getPrimaries(Xe.workingColorSpace), t = Xe.getPrimaries(a);
  let n;
  switch (e === t ? n = "" : e === hs && t === cs ? n = "LinearDisplayP3ToLinearSRGB" : e === cs && t === hs && (n = "LinearSRGBToLinearDisplayP3"), a) {
    case dt:
    case fs:
      return [n, "LinearTransferOETF"];
    case mt:
    case ba:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", a), [n, "LinearTransferOETF"];
  }
}
function gr(a, e, t) {
  const n = a.getShaderParameter(e, a.COMPILE_STATUS), i = a.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const r = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + hu(a.getShaderSource(e), r);
  } else
    return i;
}
function uu(a, e) {
  const t = du(e);
  return `vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function fu(a, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + a + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Ji = /* @__PURE__ */ new P();
function pu() {
  Xe.getLuminanceCoefficients(Ji);
  const a = Ji.x.toFixed(4), e = Ji.y.toFixed(4), t = Ji.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function mu(a) {
  return [
    a.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    a.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Si).join(`
`);
}
function gu(a) {
  const e = [];
  for (const t in a) {
    const n = a[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function _u(a, e) {
  const t = {}, n = a.getProgramParameter(e, a.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = a.getActiveAttrib(e, i), r = s.name;
    let o = 1;
    s.type === a.FLOAT_MAT2 && (o = 2), s.type === a.FLOAT_MAT3 && (o = 3), s.type === a.FLOAT_MAT4 && (o = 4), t[r] = {
      type: s.type,
      location: a.getAttribLocation(e, r),
      locationSize: o
    };
  }
  return t;
}
function Si(a) {
  return a !== "";
}
function _r(a, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return a.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function br(a, e) {
  return a.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const bu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function oa(a) {
  return a.replace(bu, xu);
}
const vu = /* @__PURE__ */ new Map();
function xu(a, e) {
  let t = Ge[e];
  if (t === void 0) {
    const n = vu.get(e);
    if (n !== void 0)
      t = Ge[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return oa(t);
}
const Mu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function vr(a) {
  return a.replace(Mu, Su);
}
function Su(a, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function xr(a) {
  let e = `precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;
  return a.precision === "highp" ? e += `
#define HIGH_PRECISION` : a.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : a.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function yu(a) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return a.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : a.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Tu(a) {
  let e = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Au(a) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Eu(a) {
  let e = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function wu(a) {
  const e = a.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Cu(a, e, t, n) {
  const i = a.getContext(), s = t.defines;
  let r = t.vertexShader, o = t.fragmentShader;
  const l = yu(t), c = Tu(t), d = Au(t), u = Eu(t), h = wu(t), f = mu(t), g = gu(s), _ = i.createProgram();
  let p, m, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Si).join(`
`), p.length > 0 && (p += `
`), m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Si).join(`
`), m.length > 0 && (m += `
`)) : (p = [
    xr(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + d : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Si).join(`
`), m = [
    xr(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + d : "",
    t.envMap ? "#define " + u : "",
    h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
    h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
    h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ge.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? fu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ge.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    uu("linearToOutputTexel", t.outputColorSpace),
    pu(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Si).join(`
`)), r = oa(r), r = _r(r, t), r = br(r, t), o = oa(o), o = _r(o, t), o = br(o, t), r = vr(r), o = vr(o), t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, p = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, m = [
    "#define varying in",
    t.glslVersion === ka ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === ka ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const v = x + p + r, T = x + m + o, E = mr(i, i.VERTEX_SHADER, v), R = mr(i, i.FRAGMENT_SHADER, T);
  i.attachShader(_, E), i.attachShader(_, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function w(y) {
    if (a.debug.checkShaderErrors) {
      const B = i.getProgramInfoLog(_).trim(), G = i.getShaderInfoLog(E).trim(), V = i.getShaderInfoLog(R).trim();
      let j = !0, O = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (j = !1, typeof a.debug.onShaderError == "function")
          a.debug.onShaderError(i, _, E, R);
        else {
          const K = gr(i, E, "vertex"), z = gr(i, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + y.name + `
Material Type: ` + y.type + `

Program Info Log: ` + B + `
` + K + `
` + z
          );
        }
      else B !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", B) : (G === "" || V === "") && (O = !1);
      O && (y.diagnostics = {
        runnable: j,
        programLog: B,
        vertexShader: {
          log: G,
          prefix: p
        },
        fragmentShader: {
          log: V,
          prefix: m
        }
      });
    }
    i.deleteShader(E), i.deleteShader(R), D = new os(i, _), Y = _u(i, _);
  }
  let D;
  this.getUniforms = function() {
    return D === void 0 && w(this), D;
  };
  let Y;
  this.getAttributes = function() {
    return Y === void 0 && w(this), Y;
  };
  let b = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return b === !1 && (b = i.getProgramParameter(_, lu)), b;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = cu++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = E, this.fragmentShader = R, this;
}
let Ru = 0;
class Pu {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), r = this._getShaderCacheForMaterial(e);
    return r.has(i) === !1 && (r.add(i), i.usedTimes++), r.has(s) === !1 && (r.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Du(e), t.set(e, n)), n;
  }
}
class Du {
  constructor(e) {
    this.id = Ru++, this.code = e, this.usedTimes = 0;
  }
}
function Lu(a, e, t, n, i, s, r) {
  const o = new eo(), l = new Pu(), c = /* @__PURE__ */ new Set(), d = [], u = i.logarithmicDepthBuffer, h = i.reverseDepthBuffer, f = i.vertexTextures;
  let g = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(b) {
    return c.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function m(b, y, B, G, V) {
    const j = G.fog, O = V.geometry, K = b.isMeshStandardMaterial ? G.environment : null, z = (b.isMeshStandardMaterial ? t : e).get(b.envMap || K), ie = z && z.mapping === 306 ? z.image.height : null, ce = _[b.type];
    b.precision !== null && (g = i.getMaxPrecision(b.precision), g !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", g, "instead."));
    const ge = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Ne = ge !== void 0 ? ge.length : 0;
    let se = 0;
    O.morphAttributes.position !== void 0 && (se = 1), O.morphAttributes.normal !== void 0 && (se = 2), O.morphAttributes.color !== void 0 && (se = 3);
    let H, Z, _e, ae;
    if (ce) {
      const Ct = Zt[ce];
      H = Ct.vertexShader, Z = Ct.fragmentShader;
    } else
      H = b.vertexShader, Z = b.fragmentShader, l.update(b), _e = l.getVertexShaderID(b), ae = l.getFragmentShaderID(b);
    const Q = a.getRenderTarget(), ee = V.isInstancedMesh === !0, he = V.isBatchedMesh === !0, de = !!b.map, ve = !!b.matcap, C = !!z, st = !!b.aoMap, Ce = !!b.lightMap, Pe = !!b.bumpMap, Ee = !!b.normalMap, Be = !!b.displacementMap, Re = !!b.emissiveMap, A = !!b.metalnessMap, M = !!b.roughnessMap, N = b.anisotropy > 0, X = b.clearcoat > 0, J = b.dispersion > 0, q = b.iridescence > 0, Te = b.sheen > 0, le = b.transmission > 0, be = N && !!b.anisotropyMap, qe = X && !!b.clearcoatMap, te = X && !!b.clearcoatNormalMap, xe = X && !!b.clearcoatRoughnessMap, Fe = q && !!b.iridescenceMap, ke = q && !!b.iridescenceThicknessMap, Me = Te && !!b.sheenColorMap, We = Te && !!b.sheenRoughnessMap, Oe = !!b.specularMap, tt = !!b.specularColorMap, L = !!b.specularIntensityMap, pe = le && !!b.transmissionMap, W = le && !!b.thicknessMap, $ = !!b.gradientMap, ue = !!b.alphaMap, me = b.alphaTest > 0, je = !!b.alphaHash, ct = !!b.extensions;
    let wt = 0;
    b.toneMapped && (Q === null || Q.isXRRenderTarget === !0) && (wt = a.toneMapping);
    const Ke = {
      shaderID: ce,
      shaderType: b.type,
      shaderName: b.name,
      vertexShader: H,
      fragmentShader: Z,
      defines: b.defines,
      customVertexShaderID: _e,
      customFragmentShaderID: ae,
      isRawShaderMaterial: b.isRawShaderMaterial === !0,
      glslVersion: b.glslVersion,
      precision: g,
      batching: he,
      batchingColor: he && V._colorsTexture !== null,
      instancing: ee,
      instancingColor: ee && V.instanceColor !== null,
      instancingMorph: ee && V.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: Q === null ? a.outputColorSpace : Q.isXRRenderTarget === !0 ? Q.texture.colorSpace : dt,
      alphaToCoverage: !!b.alphaToCoverage,
      map: de,
      matcap: ve,
      envMap: C,
      envMapMode: C && z.mapping,
      envMapCubeUVHeight: ie,
      aoMap: st,
      lightMap: Ce,
      bumpMap: Pe,
      normalMap: Ee,
      displacementMap: f && Be,
      emissiveMap: Re,
      normalMapObjectSpace: Ee && b.normalMapType === 1,
      normalMapTangentSpace: Ee && b.normalMapType === 0,
      metalnessMap: A,
      roughnessMap: M,
      anisotropy: N,
      anisotropyMap: be,
      clearcoat: X,
      clearcoatMap: qe,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: xe,
      dispersion: J,
      iridescence: q,
      iridescenceMap: Fe,
      iridescenceThicknessMap: ke,
      sheen: Te,
      sheenColorMap: Me,
      sheenRoughnessMap: We,
      specularMap: Oe,
      specularColorMap: tt,
      specularIntensityMap: L,
      transmission: le,
      transmissionMap: pe,
      thicknessMap: W,
      gradientMap: $,
      opaque: b.transparent === !1 && b.blending === 1 && b.alphaToCoverage === !1,
      alphaMap: ue,
      alphaTest: me,
      alphaHash: je,
      combine: b.combine,
      //
      mapUv: de && p(b.map.channel),
      aoMapUv: st && p(b.aoMap.channel),
      lightMapUv: Ce && p(b.lightMap.channel),
      bumpMapUv: Pe && p(b.bumpMap.channel),
      normalMapUv: Ee && p(b.normalMap.channel),
      displacementMapUv: Be && p(b.displacementMap.channel),
      emissiveMapUv: Re && p(b.emissiveMap.channel),
      metalnessMapUv: A && p(b.metalnessMap.channel),
      roughnessMapUv: M && p(b.roughnessMap.channel),
      anisotropyMapUv: be && p(b.anisotropyMap.channel),
      clearcoatMapUv: qe && p(b.clearcoatMap.channel),
      clearcoatNormalMapUv: te && p(b.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: xe && p(b.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Fe && p(b.iridescenceMap.channel),
      iridescenceThicknessMapUv: ke && p(b.iridescenceThicknessMap.channel),
      sheenColorMapUv: Me && p(b.sheenColorMap.channel),
      sheenRoughnessMapUv: We && p(b.sheenRoughnessMap.channel),
      specularMapUv: Oe && p(b.specularMap.channel),
      specularColorMapUv: tt && p(b.specularColorMap.channel),
      specularIntensityMapUv: L && p(b.specularIntensityMap.channel),
      transmissionMapUv: pe && p(b.transmissionMap.channel),
      thicknessMapUv: W && p(b.thicknessMap.channel),
      alphaMapUv: ue && p(b.alphaMap.channel),
      //
      vertexTangents: !!O.attributes.tangent && (Ee || N),
      vertexColors: b.vertexColors,
      vertexAlphas: b.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!O.attributes.uv && (de || ue),
      fog: !!j,
      useFog: b.fog === !0,
      fogExp2: !!j && j.isFogExp2,
      flatShading: b.flatShading === !0,
      sizeAttenuation: b.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: h,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: O.morphAttributes.position !== void 0,
      morphNormals: O.morphAttributes.normal !== void 0,
      morphColors: O.morphAttributes.color !== void 0,
      morphTargetsCount: Ne,
      morphTextureStride: se,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numSpotLightMaps: y.spotLightMap.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
      numLightProbes: y.numLightProbes,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: b.dithering,
      shadowMapEnabled: a.shadowMap.enabled && B.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: wt,
      decodeVideoTexture: de && b.map.isVideoTexture === !0 && Xe.getTransfer(b.map.colorSpace) === nt,
      premultipliedAlpha: b.premultipliedAlpha,
      doubleSided: b.side === 2,
      flipSided: b.side === 1,
      useDepthPacking: b.depthPacking >= 0,
      depthPacking: b.depthPacking || 0,
      index0AttributeName: b.index0AttributeName,
      extensionClipCullDistance: ct && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ct && b.extensions.multiDraw === !0 || he) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: b.customProgramCacheKey()
    };
    return Ke.vertexUv1s = c.has(1), Ke.vertexUv2s = c.has(2), Ke.vertexUv3s = c.has(3), c.clear(), Ke;
  }
  function x(b) {
    const y = [];
    if (b.shaderID ? y.push(b.shaderID) : (y.push(b.customVertexShaderID), y.push(b.customFragmentShaderID)), b.defines !== void 0)
      for (const B in b.defines)
        y.push(B), y.push(b.defines[B]);
    return b.isRawShaderMaterial === !1 && (v(y, b), T(y, b), y.push(a.outputColorSpace)), y.push(b.customProgramCacheKey), y.join();
  }
  function v(b, y) {
    b.push(y.precision), b.push(y.outputColorSpace), b.push(y.envMapMode), b.push(y.envMapCubeUVHeight), b.push(y.mapUv), b.push(y.alphaMapUv), b.push(y.lightMapUv), b.push(y.aoMapUv), b.push(y.bumpMapUv), b.push(y.normalMapUv), b.push(y.displacementMapUv), b.push(y.emissiveMapUv), b.push(y.metalnessMapUv), b.push(y.roughnessMapUv), b.push(y.anisotropyMapUv), b.push(y.clearcoatMapUv), b.push(y.clearcoatNormalMapUv), b.push(y.clearcoatRoughnessMapUv), b.push(y.iridescenceMapUv), b.push(y.iridescenceThicknessMapUv), b.push(y.sheenColorMapUv), b.push(y.sheenRoughnessMapUv), b.push(y.specularMapUv), b.push(y.specularColorMapUv), b.push(y.specularIntensityMapUv), b.push(y.transmissionMapUv), b.push(y.thicknessMapUv), b.push(y.combine), b.push(y.fogExp2), b.push(y.sizeAttenuation), b.push(y.morphTargetsCount), b.push(y.morphAttributeCount), b.push(y.numDirLights), b.push(y.numPointLights), b.push(y.numSpotLights), b.push(y.numSpotLightMaps), b.push(y.numHemiLights), b.push(y.numRectAreaLights), b.push(y.numDirLightShadows), b.push(y.numPointLightShadows), b.push(y.numSpotLightShadows), b.push(y.numSpotLightShadowsWithMaps), b.push(y.numLightProbes), b.push(y.shadowMapType), b.push(y.toneMapping), b.push(y.numClippingPlanes), b.push(y.numClipIntersection), b.push(y.depthPacking);
  }
  function T(b, y) {
    o.disableAll(), y.supportsVertexTextures && o.enable(0), y.instancing && o.enable(1), y.instancingColor && o.enable(2), y.instancingMorph && o.enable(3), y.matcap && o.enable(4), y.envMap && o.enable(5), y.normalMapObjectSpace && o.enable(6), y.normalMapTangentSpace && o.enable(7), y.clearcoat && o.enable(8), y.iridescence && o.enable(9), y.alphaTest && o.enable(10), y.vertexColors && o.enable(11), y.vertexAlphas && o.enable(12), y.vertexUv1s && o.enable(13), y.vertexUv2s && o.enable(14), y.vertexUv3s && o.enable(15), y.vertexTangents && o.enable(16), y.anisotropy && o.enable(17), y.alphaHash && o.enable(18), y.batching && o.enable(19), y.dispersion && o.enable(20), y.batchingColor && o.enable(21), b.push(o.mask), o.disableAll(), y.fog && o.enable(0), y.useFog && o.enable(1), y.flatShading && o.enable(2), y.logarithmicDepthBuffer && o.enable(3), y.reverseDepthBuffer && o.enable(4), y.skinning && o.enable(5), y.morphTargets && o.enable(6), y.morphNormals && o.enable(7), y.morphColors && o.enable(8), y.premultipliedAlpha && o.enable(9), y.shadowMapEnabled && o.enable(10), y.doubleSided && o.enable(11), y.flipSided && o.enable(12), y.useDepthPacking && o.enable(13), y.dithering && o.enable(14), y.transmission && o.enable(15), y.sheen && o.enable(16), y.opaque && o.enable(17), y.pointsUvs && o.enable(18), y.decodeVideoTexture && o.enable(19), y.alphaToCoverage && o.enable(20), b.push(o.mask);
  }
  function E(b) {
    const y = _[b.type];
    let B;
    if (y) {
      const G = Zt[y];
      B = wi.clone(G.uniforms);
    } else
      B = b.uniforms;
    return B;
  }
  function R(b, y) {
    let B;
    for (let G = 0, V = d.length; G < V; G++) {
      const j = d[G];
      if (j.cacheKey === y) {
        B = j, ++B.usedTimes;
        break;
      }
    }
    return B === void 0 && (B = new Cu(a, y, b, s), d.push(B)), B;
  }
  function w(b) {
    if (--b.usedTimes === 0) {
      const y = d.indexOf(b);
      d[y] = d[d.length - 1], d.pop(), b.destroy();
    }
  }
  function D(b) {
    l.remove(b);
  }
  function Y() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: x,
    getUniforms: E,
    acquireProgram: R,
    releaseProgram: w,
    releaseShaderCache: D,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: d,
    dispose: Y
  };
}
function Iu() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(r) {
    return a.has(r);
  }
  function t(r) {
    let o = a.get(r);
    return o === void 0 && (o = {}, a.set(r, o)), o;
  }
  function n(r) {
    a.delete(r);
  }
  function i(r, o, l) {
    a.get(r)[o] = l;
  }
  function s() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: i,
    dispose: s
  };
}
function Uu(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.material.id !== e.material.id ? a.material.id - e.material.id : a.z !== e.z ? a.z - e.z : a.id - e.id;
}
function Mr(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.z !== e.z ? e.z - a.z : a.id - e.id;
}
function Sr() {
  const a = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function r(u, h, f, g, _, p) {
    let m = a[e];
    return m === void 0 ? (m = {
      id: u.id,
      object: u,
      geometry: h,
      material: f,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: p
    }, a[e] = m) : (m.id = u.id, m.object = u, m.geometry = h, m.material = f, m.groupOrder = g, m.renderOrder = u.renderOrder, m.z = _, m.group = p), e++, m;
  }
  function o(u, h, f, g, _, p) {
    const m = r(u, h, f, g, _, p);
    f.transmission > 0 ? n.push(m) : f.transparent === !0 ? i.push(m) : t.push(m);
  }
  function l(u, h, f, g, _, p) {
    const m = r(u, h, f, g, _, p);
    f.transmission > 0 ? n.unshift(m) : f.transparent === !0 ? i.unshift(m) : t.unshift(m);
  }
  function c(u, h) {
    t.length > 1 && t.sort(u || Uu), n.length > 1 && n.sort(h || Mr), i.length > 1 && i.sort(h || Mr);
  }
  function d() {
    for (let u = e, h = a.length; u < h; u++) {
      const f = a[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: d,
    sort: c
  };
}
function Nu() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = a.get(n);
    let r;
    return s === void 0 ? (r = new Sr(), a.set(n, [r])) : i >= s.length ? (r = new Sr(), s.push(r)) : r = s[i], r;
  }
  function t() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Fu() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new re()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new re(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new re(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new re(),
            groundColor: new re()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new re(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
function ku() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
let Bu = 0;
function Ou(a, e) {
  return (e.castShadow ? 2 : 0) - (a.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (a.map ? 1 : 0);
}
function Gu(a) {
  const e = new Fu(), t = ku(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new P());
  const i = new P(), s = new Le(), r = new Le();
  function o(c) {
    let d = 0, u = 0, h = 0;
    for (let Y = 0; Y < 9; Y++) n.probe[Y].set(0, 0, 0);
    let f = 0, g = 0, _ = 0, p = 0, m = 0, x = 0, v = 0, T = 0, E = 0, R = 0, w = 0;
    c.sort(Ou);
    for (let Y = 0, b = c.length; Y < b; Y++) {
      const y = c[Y], B = y.color, G = y.intensity, V = y.distance, j = y.shadow && y.shadow.map ? y.shadow.map.texture : null;
      if (y.isAmbientLight)
        d += B.r * G, u += B.g * G, h += B.b * G;
      else if (y.isLightProbe) {
        for (let O = 0; O < 9; O++)
          n.probe[O].addScaledVector(y.sh.coefficients[O], G);
        w++;
      } else if (y.isDirectionalLight) {
        const O = e.get(y);
        if (O.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
          const K = y.shadow, z = t.get(y);
          z.shadowIntensity = K.intensity, z.shadowBias = K.bias, z.shadowNormalBias = K.normalBias, z.shadowRadius = K.radius, z.shadowMapSize = K.mapSize, n.directionalShadow[f] = z, n.directionalShadowMap[f] = j, n.directionalShadowMatrix[f] = y.shadow.matrix, x++;
        }
        n.directional[f] = O, f++;
      } else if (y.isSpotLight) {
        const O = e.get(y);
        O.position.setFromMatrixPosition(y.matrixWorld), O.color.copy(B).multiplyScalar(G), O.distance = V, O.coneCos = Math.cos(y.angle), O.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), O.decay = y.decay, n.spot[_] = O;
        const K = y.shadow;
        if (y.map && (n.spotLightMap[E] = y.map, E++, K.updateMatrices(y), y.castShadow && R++), n.spotLightMatrix[_] = K.matrix, y.castShadow) {
          const z = t.get(y);
          z.shadowIntensity = K.intensity, z.shadowBias = K.bias, z.shadowNormalBias = K.normalBias, z.shadowRadius = K.radius, z.shadowMapSize = K.mapSize, n.spotShadow[_] = z, n.spotShadowMap[_] = j, T++;
        }
        _++;
      } else if (y.isRectAreaLight) {
        const O = e.get(y);
        O.color.copy(B).multiplyScalar(G), O.halfWidth.set(y.width * 0.5, 0, 0), O.halfHeight.set(0, y.height * 0.5, 0), n.rectArea[p] = O, p++;
      } else if (y.isPointLight) {
        const O = e.get(y);
        if (O.color.copy(y.color).multiplyScalar(y.intensity), O.distance = y.distance, O.decay = y.decay, y.castShadow) {
          const K = y.shadow, z = t.get(y);
          z.shadowIntensity = K.intensity, z.shadowBias = K.bias, z.shadowNormalBias = K.normalBias, z.shadowRadius = K.radius, z.shadowMapSize = K.mapSize, z.shadowCameraNear = K.camera.near, z.shadowCameraFar = K.camera.far, n.pointShadow[g] = z, n.pointShadowMap[g] = j, n.pointShadowMatrix[g] = y.shadow.matrix, v++;
        }
        n.point[g] = O, g++;
      } else if (y.isHemisphereLight) {
        const O = e.get(y);
        O.skyColor.copy(y.color).multiplyScalar(G), O.groundColor.copy(y.groundColor).multiplyScalar(G), n.hemi[m] = O, m++;
      }
    }
    p > 0 && (a.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = oe.LTC_FLOAT_1, n.rectAreaLTC2 = oe.LTC_FLOAT_2) : (n.rectAreaLTC1 = oe.LTC_HALF_1, n.rectAreaLTC2 = oe.LTC_HALF_2)), n.ambient[0] = d, n.ambient[1] = u, n.ambient[2] = h;
    const D = n.hash;
    (D.directionalLength !== f || D.pointLength !== g || D.spotLength !== _ || D.rectAreaLength !== p || D.hemiLength !== m || D.numDirectionalShadows !== x || D.numPointShadows !== v || D.numSpotShadows !== T || D.numSpotMaps !== E || D.numLightProbes !== w) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = p, n.point.length = g, n.hemi.length = m, n.directionalShadow.length = x, n.directionalShadowMap.length = x, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = T, n.spotShadowMap.length = T, n.directionalShadowMatrix.length = x, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = T + E - R, n.spotLightMap.length = E, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = w, D.directionalLength = f, D.pointLength = g, D.spotLength = _, D.rectAreaLength = p, D.hemiLength = m, D.numDirectionalShadows = x, D.numPointShadows = v, D.numSpotShadows = T, D.numSpotMaps = E, D.numLightProbes = w, n.version = Bu++);
  }
  function l(c, d) {
    let u = 0, h = 0, f = 0, g = 0, _ = 0;
    const p = d.matrixWorldInverse;
    for (let m = 0, x = c.length; m < x; m++) {
      const v = c[m];
      if (v.isDirectionalLight) {
        const T = n.directional[u];
        T.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), T.direction.sub(i), T.direction.transformDirection(p), u++;
      } else if (v.isSpotLight) {
        const T = n.spot[f];
        T.position.setFromMatrixPosition(v.matrixWorld), T.position.applyMatrix4(p), T.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), T.direction.sub(i), T.direction.transformDirection(p), f++;
      } else if (v.isRectAreaLight) {
        const T = n.rectArea[g];
        T.position.setFromMatrixPosition(v.matrixWorld), T.position.applyMatrix4(p), r.identity(), s.copy(v.matrixWorld), s.premultiply(p), r.extractRotation(s), T.halfWidth.set(v.width * 0.5, 0, 0), T.halfHeight.set(0, v.height * 0.5, 0), T.halfWidth.applyMatrix4(r), T.halfHeight.applyMatrix4(r), g++;
      } else if (v.isPointLight) {
        const T = n.point[h];
        T.position.setFromMatrixPosition(v.matrixWorld), T.position.applyMatrix4(p), h++;
      } else if (v.isHemisphereLight) {
        const T = n.hemi[_];
        T.direction.setFromMatrixPosition(v.matrixWorld), T.direction.transformDirection(p), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function yr(a) {
  const e = new Gu(a), t = [], n = [];
  function i(d) {
    c.camera = d, t.length = 0, n.length = 0;
  }
  function s(d) {
    t.push(d);
  }
  function r(d) {
    n.push(d);
  }
  function o() {
    e.setup(t);
  }
  function l(d) {
    e.setupView(t, d);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: r
  };
}
function zu(a) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, s = 0) {
    const r = e.get(i);
    let o;
    return r === void 0 ? (o = new yr(a), e.set(i, [o])) : s >= r.length ? (o = new yr(a), r.push(o)) : o = r[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class po extends qt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Hu extends qt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Vu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Wu = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function ju(a, e, t) {
  let n = new xa();
  const i = new De(), s = new De(), r = new Ve(), o = new po({ depthPacking: 3201 }), l = new Hu(), c = {}, d = t.maxTextureSize, u = { 0: 1, 1: 0, 2: 2 }, h = new vt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new De() },
      radius: { value: 4 }
    },
    vertexShader: Vu,
    fragmentShader: Wu
  }), f = h.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new $t();
  g.setAttribute(
    "position",
    new Et(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new bt(g, h), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let m = this.type;
  this.render = function(R, w, D) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || R.length === 0) return;
    const Y = a.getRenderTarget(), b = a.getActiveCubeFace(), y = a.getActiveMipmapLevel(), B = a.state;
    B.setBlending(0), B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
    const G = m !== 3 && this.type === 3, V = m === 3 && this.type !== 3;
    for (let j = 0, O = R.length; j < O; j++) {
      const K = R[j], z = K.shadow;
      if (z === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (z.autoUpdate === !1 && z.needsUpdate === !1) continue;
      i.copy(z.mapSize);
      const ie = z.getFrameExtents();
      if (i.multiply(ie), s.copy(z.mapSize), (i.x > d || i.y > d) && (i.x > d && (s.x = Math.floor(d / ie.x), i.x = s.x * ie.x, z.mapSize.x = s.x), i.y > d && (s.y = Math.floor(d / ie.y), i.y = s.y * ie.y, z.mapSize.y = s.y)), z.map === null || G === !0 || V === !0) {
        const ge = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        z.map !== null && z.map.dispose(), z.map = new Rt(i.x, i.y, ge), z.map.texture.name = K.name + ".shadowMap", z.camera.updateProjectionMatrix();
      }
      a.setRenderTarget(z.map), a.clear();
      const ce = z.getViewportCount();
      for (let ge = 0; ge < ce; ge++) {
        const Ne = z.getViewport(ge);
        r.set(
          s.x * Ne.x,
          s.y * Ne.y,
          s.x * Ne.z,
          s.y * Ne.w
        ), B.viewport(r), z.updateMatrices(K, ge), n = z.getFrustum(), T(w, D, z.camera, K, this.type);
      }
      z.isPointLightShadow !== !0 && this.type === 3 && x(z, D), z.needsUpdate = !1;
    }
    m = this.type, p.needsUpdate = !1, a.setRenderTarget(Y, b, y);
  };
  function x(R, w) {
    const D = e.update(_);
    h.defines.VSM_SAMPLES !== R.blurSamples && (h.defines.VSM_SAMPLES = R.blurSamples, f.defines.VSM_SAMPLES = R.blurSamples, h.needsUpdate = !0, f.needsUpdate = !0), R.mapPass === null && (R.mapPass = new Rt(i.x, i.y)), h.uniforms.shadow_pass.value = R.map.texture, h.uniforms.resolution.value = R.mapSize, h.uniforms.radius.value = R.radius, a.setRenderTarget(R.mapPass), a.clear(), a.renderBufferDirect(w, null, D, h, _, null), f.uniforms.shadow_pass.value = R.mapPass.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, a.setRenderTarget(R.map), a.clear(), a.renderBufferDirect(w, null, D, f, _, null);
  }
  function v(R, w, D, Y) {
    let b = null;
    const y = D.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (y !== void 0)
      b = y;
    else if (b = D.isPointLight === !0 ? l : o, a.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const B = b.uuid, G = w.uuid;
      let V = c[B];
      V === void 0 && (V = {}, c[B] = V);
      let j = V[G];
      j === void 0 && (j = b.clone(), V[G] = j, w.addEventListener("dispose", E)), b = j;
    }
    if (b.visible = w.visible, b.wireframe = w.wireframe, Y === 3 ? b.side = w.shadowSide !== null ? w.shadowSide : w.side : b.side = w.shadowSide !== null ? w.shadowSide : u[w.side], b.alphaMap = w.alphaMap, b.alphaTest = w.alphaTest, b.map = w.map, b.clipShadows = w.clipShadows, b.clippingPlanes = w.clippingPlanes, b.clipIntersection = w.clipIntersection, b.displacementMap = w.displacementMap, b.displacementScale = w.displacementScale, b.displacementBias = w.displacementBias, b.wireframeLinewidth = w.wireframeLinewidth, b.linewidth = w.linewidth, D.isPointLight === !0 && b.isMeshDistanceMaterial === !0) {
      const B = a.properties.get(b);
      B.light = D;
    }
    return b;
  }
  function T(R, w, D, Y, b) {
    if (R.visible === !1) return;
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && b === 3) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, R.matrixWorld);
      const G = e.update(R), V = R.material;
      if (Array.isArray(V)) {
        const j = G.groups;
        for (let O = 0, K = j.length; O < K; O++) {
          const z = j[O], ie = V[z.materialIndex];
          if (ie && ie.visible) {
            const ce = v(R, ie, Y, b);
            R.onBeforeShadow(a, R, w, D, G, ce, z), a.renderBufferDirect(D, null, G, ce, R, z), R.onAfterShadow(a, R, w, D, G, ce, z);
          }
        }
      } else if (V.visible) {
        const j = v(R, V, Y, b);
        R.onBeforeShadow(a, R, w, D, G, j, null), a.renderBufferDirect(D, null, G, j, R, null), R.onAfterShadow(a, R, w, D, G, j, null);
      }
    }
    const B = R.children;
    for (let G = 0, V = B.length; G < V; G++)
      T(B[G], w, D, Y, b);
  }
  function E(R) {
    R.target.removeEventListener("dispose", E);
    for (const D in c) {
      const Y = c[D], b = R.target.uuid;
      b in Y && (Y[b].dispose(), delete Y[b]);
    }
  }
}
const Xu = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function qu(a) {
  function e() {
    let L = !1;
    const pe = new Ve();
    let W = null;
    const $ = new Ve(0, 0, 0, 0);
    return {
      setMask: function(ue) {
        W !== ue && !L && (a.colorMask(ue, ue, ue, ue), W = ue);
      },
      setLocked: function(ue) {
        L = ue;
      },
      setClear: function(ue, me, je, ct, wt) {
        wt === !0 && (ue *= ct, me *= ct, je *= ct), pe.set(ue, me, je, ct), $.equals(pe) === !1 && (a.clearColor(ue, me, je, ct), $.copy(pe));
      },
      reset: function() {
        L = !1, W = null, $.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let L = !1, pe = !1, W = null, $ = null, ue = null;
    return {
      setReversed: function(me) {
        pe = me;
      },
      setTest: function(me) {
        me ? _e(a.DEPTH_TEST) : ae(a.DEPTH_TEST);
      },
      setMask: function(me) {
        W !== me && !L && (a.depthMask(me), W = me);
      },
      setFunc: function(me) {
        if (pe && (me = Xu[me]), $ !== me) {
          switch (me) {
            case 0:
              a.depthFunc(a.NEVER);
              break;
            case 1:
              a.depthFunc(a.ALWAYS);
              break;
            case 2:
              a.depthFunc(a.LESS);
              break;
            case 3:
              a.depthFunc(a.LEQUAL);
              break;
            case 4:
              a.depthFunc(a.EQUAL);
              break;
            case 5:
              a.depthFunc(a.GEQUAL);
              break;
            case 6:
              a.depthFunc(a.GREATER);
              break;
            case 7:
              a.depthFunc(a.NOTEQUAL);
              break;
            default:
              a.depthFunc(a.LEQUAL);
          }
          $ = me;
        }
      },
      setLocked: function(me) {
        L = me;
      },
      setClear: function(me) {
        ue !== me && (a.clearDepth(me), ue = me);
      },
      reset: function() {
        L = !1, W = null, $ = null, ue = null;
      }
    };
  }
  function n() {
    let L = !1, pe = null, W = null, $ = null, ue = null, me = null, je = null, ct = null, wt = null;
    return {
      setTest: function(Ke) {
        L || (Ke ? _e(a.STENCIL_TEST) : ae(a.STENCIL_TEST));
      },
      setMask: function(Ke) {
        pe !== Ke && !L && (a.stencilMask(Ke), pe = Ke);
      },
      setFunc: function(Ke, Ct, tn) {
        (W !== Ke || $ !== Ct || ue !== tn) && (a.stencilFunc(Ke, Ct, tn), W = Ke, $ = Ct, ue = tn);
      },
      setOp: function(Ke, Ct, tn) {
        (me !== Ke || je !== Ct || ct !== tn) && (a.stencilOp(Ke, Ct, tn), me = Ke, je = Ct, ct = tn);
      },
      setLocked: function(Ke) {
        L = Ke;
      },
      setClear: function(Ke) {
        wt !== Ke && (a.clearStencil(Ke), wt = Ke);
      },
      reset: function() {
        L = !1, pe = null, W = null, $ = null, ue = null, me = null, je = null, ct = null, wt = null;
      }
    };
  }
  const i = new e(), s = new t(), r = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, d = {}, u = /* @__PURE__ */ new WeakMap(), h = [], f = null, g = !1, _ = null, p = null, m = null, x = null, v = null, T = null, E = null, R = new re(0, 0, 0), w = 0, D = !1, Y = null, b = null, y = null, B = null, G = null;
  const V = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let j = !1, O = 0;
  const K = a.getParameter(a.VERSION);
  K.indexOf("WebGL") !== -1 ? (O = parseFloat(/^WebGL (\d)/.exec(K)[1]), j = O >= 1) : K.indexOf("OpenGL ES") !== -1 && (O = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), j = O >= 2);
  let z = null, ie = {};
  const ce = a.getParameter(a.SCISSOR_BOX), ge = a.getParameter(a.VIEWPORT), Ne = new Ve().fromArray(ce), se = new Ve().fromArray(ge);
  function H(L, pe, W, $) {
    const ue = new Uint8Array(4), me = a.createTexture();
    a.bindTexture(L, me), a.texParameteri(L, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(L, a.TEXTURE_MAG_FILTER, a.NEAREST);
    for (let je = 0; je < W; je++)
      L === a.TEXTURE_3D || L === a.TEXTURE_2D_ARRAY ? a.texImage3D(pe, 0, a.RGBA, 1, 1, $, 0, a.RGBA, a.UNSIGNED_BYTE, ue) : a.texImage2D(pe + je, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, ue);
    return me;
  }
  const Z = {};
  Z[a.TEXTURE_2D] = H(a.TEXTURE_2D, a.TEXTURE_2D, 1), Z[a.TEXTURE_CUBE_MAP] = H(a.TEXTURE_CUBE_MAP, a.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Z[a.TEXTURE_2D_ARRAY] = H(a.TEXTURE_2D_ARRAY, a.TEXTURE_2D_ARRAY, 1, 1), Z[a.TEXTURE_3D] = H(a.TEXTURE_3D, a.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), s.setClear(1), r.setClear(0), _e(a.DEPTH_TEST), s.setFunc(3), Ce(!1), Pe(1), _e(a.CULL_FACE), C(0);
  function _e(L) {
    c[L] !== !0 && (a.enable(L), c[L] = !0);
  }
  function ae(L) {
    c[L] !== !1 && (a.disable(L), c[L] = !1);
  }
  function Q(L, pe) {
    return d[L] !== pe ? (a.bindFramebuffer(L, pe), d[L] = pe, L === a.DRAW_FRAMEBUFFER && (d[a.FRAMEBUFFER] = pe), L === a.FRAMEBUFFER && (d[a.DRAW_FRAMEBUFFER] = pe), !0) : !1;
  }
  function ee(L, pe) {
    let W = h, $ = !1;
    if (L) {
      W = u.get(pe), W === void 0 && (W = [], u.set(pe, W));
      const ue = L.textures;
      if (W.length !== ue.length || W[0] !== a.COLOR_ATTACHMENT0) {
        for (let me = 0, je = ue.length; me < je; me++)
          W[me] = a.COLOR_ATTACHMENT0 + me;
        W.length = ue.length, $ = !0;
      }
    } else
      W[0] !== a.BACK && (W[0] = a.BACK, $ = !0);
    $ && a.drawBuffers(W);
  }
  function he(L) {
    return f !== L ? (a.useProgram(L), f = L, !0) : !1;
  }
  const de = {
    100: a.FUNC_ADD,
    101: a.FUNC_SUBTRACT,
    102: a.FUNC_REVERSE_SUBTRACT
  };
  de[103] = a.MIN, de[104] = a.MAX;
  const ve = {
    200: a.ZERO,
    201: a.ONE,
    202: a.SRC_COLOR,
    204: a.SRC_ALPHA,
    210: a.SRC_ALPHA_SATURATE,
    208: a.DST_COLOR,
    206: a.DST_ALPHA,
    203: a.ONE_MINUS_SRC_COLOR,
    205: a.ONE_MINUS_SRC_ALPHA,
    209: a.ONE_MINUS_DST_COLOR,
    207: a.ONE_MINUS_DST_ALPHA,
    211: a.CONSTANT_COLOR,
    212: a.ONE_MINUS_CONSTANT_COLOR,
    213: a.CONSTANT_ALPHA,
    214: a.ONE_MINUS_CONSTANT_ALPHA
  };
  function C(L, pe, W, $, ue, me, je, ct, wt, Ke) {
    if (L === 0) {
      g === !0 && (ae(a.BLEND), g = !1);
      return;
    }
    if (g === !1 && (_e(a.BLEND), g = !0), L !== 5) {
      if (L !== _ || Ke !== D) {
        if ((p !== 100 || v !== 100) && (a.blendEquation(a.FUNC_ADD), p = 100, v = 100), Ke)
          switch (L) {
            case 1:
              a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              a.blendFunc(a.ONE, a.ONE);
              break;
            case 3:
              a.blendFuncSeparate(a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ZERO, a.ONE);
              break;
            case 4:
              a.blendFuncSeparate(a.ZERO, a.SRC_COLOR, a.ZERO, a.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case 1:
              a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              a.blendFunc(a.SRC_ALPHA, a.ONE);
              break;
            case 3:
              a.blendFuncSeparate(a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ZERO, a.ONE);
              break;
            case 4:
              a.blendFunc(a.ZERO, a.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        m = null, x = null, T = null, E = null, R.set(0, 0, 0), w = 0, _ = L, D = Ke;
      }
      return;
    }
    ue = ue || pe, me = me || W, je = je || $, (pe !== p || ue !== v) && (a.blendEquationSeparate(de[pe], de[ue]), p = pe, v = ue), (W !== m || $ !== x || me !== T || je !== E) && (a.blendFuncSeparate(ve[W], ve[$], ve[me], ve[je]), m = W, x = $, T = me, E = je), (ct.equals(R) === !1 || wt !== w) && (a.blendColor(ct.r, ct.g, ct.b, wt), R.copy(ct), w = wt), _ = L, D = !1;
  }
  function st(L, pe) {
    L.side === 2 ? ae(a.CULL_FACE) : _e(a.CULL_FACE);
    let W = L.side === 1;
    pe && (W = !W), Ce(W), L.blending === 1 && L.transparent === !1 ? C(0) : C(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), s.setFunc(L.depthFunc), s.setTest(L.depthTest), s.setMask(L.depthWrite), i.setMask(L.colorWrite);
    const $ = L.stencilWrite;
    r.setTest($), $ && (r.setMask(L.stencilWriteMask), r.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), r.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Be(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? _e(a.SAMPLE_ALPHA_TO_COVERAGE) : ae(a.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ce(L) {
    Y !== L && (L ? a.frontFace(a.CW) : a.frontFace(a.CCW), Y = L);
  }
  function Pe(L) {
    L !== 0 ? (_e(a.CULL_FACE), L !== b && (L === 1 ? a.cullFace(a.BACK) : L === 2 ? a.cullFace(a.FRONT) : a.cullFace(a.FRONT_AND_BACK))) : ae(a.CULL_FACE), b = L;
  }
  function Ee(L) {
    L !== y && (j && a.lineWidth(L), y = L);
  }
  function Be(L, pe, W) {
    L ? (_e(a.POLYGON_OFFSET_FILL), (B !== pe || G !== W) && (a.polygonOffset(pe, W), B = pe, G = W)) : ae(a.POLYGON_OFFSET_FILL);
  }
  function Re(L) {
    L ? _e(a.SCISSOR_TEST) : ae(a.SCISSOR_TEST);
  }
  function A(L) {
    L === void 0 && (L = a.TEXTURE0 + V - 1), z !== L && (a.activeTexture(L), z = L);
  }
  function M(L, pe, W) {
    W === void 0 && (z === null ? W = a.TEXTURE0 + V - 1 : W = z);
    let $ = ie[W];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, ie[W] = $), ($.type !== L || $.texture !== pe) && (z !== W && (a.activeTexture(W), z = W), a.bindTexture(L, pe || Z[L]), $.type = L, $.texture = pe);
  }
  function N() {
    const L = ie[z];
    L !== void 0 && L.type !== void 0 && (a.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function X() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function J() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function q() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Te() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function be() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function qe() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function te() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function xe() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Fe() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ke(L) {
    Ne.equals(L) === !1 && (a.scissor(L.x, L.y, L.z, L.w), Ne.copy(L));
  }
  function Me(L) {
    se.equals(L) === !1 && (a.viewport(L.x, L.y, L.z, L.w), se.copy(L));
  }
  function We(L, pe) {
    let W = l.get(pe);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(pe, W));
    let $ = W.get(L);
    $ === void 0 && ($ = a.getUniformBlockIndex(pe, L.name), W.set(L, $));
  }
  function Oe(L, pe) {
    const $ = l.get(pe).get(L);
    o.get(pe) !== $ && (a.uniformBlockBinding(pe, $, L.__bindingPointIndex), o.set(pe, $));
  }
  function tt() {
    a.disable(a.BLEND), a.disable(a.CULL_FACE), a.disable(a.DEPTH_TEST), a.disable(a.POLYGON_OFFSET_FILL), a.disable(a.SCISSOR_TEST), a.disable(a.STENCIL_TEST), a.disable(a.SAMPLE_ALPHA_TO_COVERAGE), a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ONE, a.ZERO), a.blendFuncSeparate(a.ONE, a.ZERO, a.ONE, a.ZERO), a.blendColor(0, 0, 0, 0), a.colorMask(!0, !0, !0, !0), a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.depthFunc(a.LESS), a.clearDepth(1), a.stencilMask(4294967295), a.stencilFunc(a.ALWAYS, 0, 4294967295), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), a.clearStencil(0), a.cullFace(a.BACK), a.frontFace(a.CCW), a.polygonOffset(0, 0), a.activeTexture(a.TEXTURE0), a.bindFramebuffer(a.FRAMEBUFFER, null), a.bindFramebuffer(a.DRAW_FRAMEBUFFER, null), a.bindFramebuffer(a.READ_FRAMEBUFFER, null), a.useProgram(null), a.lineWidth(1), a.scissor(0, 0, a.canvas.width, a.canvas.height), a.viewport(0, 0, a.canvas.width, a.canvas.height), c = {}, z = null, ie = {}, d = {}, u = /* @__PURE__ */ new WeakMap(), h = [], f = null, g = !1, _ = null, p = null, m = null, x = null, v = null, T = null, E = null, R = new re(0, 0, 0), w = 0, D = !1, Y = null, b = null, y = null, B = null, G = null, Ne.set(0, 0, a.canvas.width, a.canvas.height), se.set(0, 0, a.canvas.width, a.canvas.height), i.reset(), s.reset(), r.reset();
  }
  return {
    buffers: {
      color: i,
      depth: s,
      stencil: r
    },
    enable: _e,
    disable: ae,
    bindFramebuffer: Q,
    drawBuffers: ee,
    useProgram: he,
    setBlending: C,
    setMaterial: st,
    setFlipSided: Ce,
    setCullFace: Pe,
    setLineWidth: Ee,
    setPolygonOffset: Be,
    setScissorTest: Re,
    activeTexture: A,
    bindTexture: M,
    unbindTexture: N,
    compressedTexImage2D: X,
    compressedTexImage3D: J,
    texImage2D: xe,
    texImage3D: Fe,
    updateUBOMapping: We,
    uniformBlockBinding: Oe,
    texStorage2D: qe,
    texStorage3D: te,
    texSubImage2D: q,
    texSubImage3D: Te,
    compressedTexSubImage2D: le,
    compressedTexSubImage3D: be,
    scissor: ke,
    viewport: Me,
    reset: tt
  };
}
function Tr(a, e, t, n) {
  const i = Yu(n);
  switch (t) {
    case 1021:
      return a * e;
    case 1024:
      return a * e;
    case 1025:
      return a * e * 2;
    case 1028:
      return a * e / i.components * i.byteLength;
    case 1029:
      return a * e / i.components * i.byteLength;
    case 1030:
      return a * e * 2 / i.components * i.byteLength;
    case 1031:
      return a * e * 2 / i.components * i.byteLength;
    case 1022:
      return a * e * 3 / i.components * i.byteLength;
    case 1023:
      return a * e * 4 / i.components * i.byteLength;
    case 1033:
      return a * e * 4 / i.components * i.byteLength;
    case 33776:
    case 33777:
      return Math.floor((a + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((a + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(a, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(a, 8) * Math.max(e, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((a + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((a + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((a + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((a + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((a + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((a + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((a + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((a + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((a + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((a + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((a + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((a + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((a + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((a + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((a + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((a + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(a / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(a / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(a / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Yu(a) {
  switch (a) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${a}.`);
}
function Ku(a, e, t, n, i, s, r) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new De(), d = /* @__PURE__ */ new WeakMap();
  let u;
  const h = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(A, M) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(A, M)
    ) : Ei("canvas");
  }
  function _(A, M, N) {
    let X = 1;
    const J = Re(A);
    if ((J.width > N || J.height > N) && (X = N / Math.max(J.width, J.height)), X < 1)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
        const q = Math.floor(X * J.width), Te = Math.floor(X * J.height);
        u === void 0 && (u = g(q, Te));
        const le = M ? g(q, Te) : u;
        return le.width = q, le.height = Te, le.getContext("2d").drawImage(A, 0, 0, q, Te), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + q + "x" + Te + ")."), le;
      } else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), A;
    return A;
  }
  function p(A) {
    return A.generateMipmaps && A.minFilter !== 1003 && A.minFilter !== 1006;
  }
  function m(A) {
    a.generateMipmap(A);
  }
  function x(A, M, N, X, J = !1) {
    if (A !== null) {
      if (a[A] !== void 0) return a[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let q = M;
    if (M === a.RED && (N === a.FLOAT && (q = a.R32F), N === a.HALF_FLOAT && (q = a.R16F), N === a.UNSIGNED_BYTE && (q = a.R8)), M === a.RED_INTEGER && (N === a.UNSIGNED_BYTE && (q = a.R8UI), N === a.UNSIGNED_SHORT && (q = a.R16UI), N === a.UNSIGNED_INT && (q = a.R32UI), N === a.BYTE && (q = a.R8I), N === a.SHORT && (q = a.R16I), N === a.INT && (q = a.R32I)), M === a.RG && (N === a.FLOAT && (q = a.RG32F), N === a.HALF_FLOAT && (q = a.RG16F), N === a.UNSIGNED_BYTE && (q = a.RG8)), M === a.RG_INTEGER && (N === a.UNSIGNED_BYTE && (q = a.RG8UI), N === a.UNSIGNED_SHORT && (q = a.RG16UI), N === a.UNSIGNED_INT && (q = a.RG32UI), N === a.BYTE && (q = a.RG8I), N === a.SHORT && (q = a.RG16I), N === a.INT && (q = a.RG32I)), M === a.RGB_INTEGER && (N === a.UNSIGNED_BYTE && (q = a.RGB8UI), N === a.UNSIGNED_SHORT && (q = a.RGB16UI), N === a.UNSIGNED_INT && (q = a.RGB32UI), N === a.BYTE && (q = a.RGB8I), N === a.SHORT && (q = a.RGB16I), N === a.INT && (q = a.RGB32I)), M === a.RGBA_INTEGER && (N === a.UNSIGNED_BYTE && (q = a.RGBA8UI), N === a.UNSIGNED_SHORT && (q = a.RGBA16UI), N === a.UNSIGNED_INT && (q = a.RGBA32UI), N === a.BYTE && (q = a.RGBA8I), N === a.SHORT && (q = a.RGBA16I), N === a.INT && (q = a.RGBA32I)), M === a.RGB && N === a.UNSIGNED_INT_5_9_9_9_REV && (q = a.RGB9_E5), M === a.RGBA) {
      const Te = J ? ls : Xe.getTransfer(X);
      N === a.FLOAT && (q = a.RGBA32F), N === a.HALF_FLOAT && (q = a.RGBA16F), N === a.UNSIGNED_BYTE && (q = Te === nt ? a.SRGB8_ALPHA8 : a.RGBA8), N === a.UNSIGNED_SHORT_4_4_4_4 && (q = a.RGBA4), N === a.UNSIGNED_SHORT_5_5_5_1 && (q = a.RGB5_A1);
    }
    return (q === a.R16F || q === a.R32F || q === a.RG16F || q === a.RG32F || q === a.RGBA16F || q === a.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function v(A, M) {
    let N;
    return A ? M === null || M === 1014 || M === 1020 ? N = a.DEPTH24_STENCIL8 : M === 1015 ? N = a.DEPTH32F_STENCIL8 : M === 1012 && (N = a.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === 1014 || M === 1020 ? N = a.DEPTH_COMPONENT24 : M === 1015 ? N = a.DEPTH_COMPONENT32F : M === 1012 && (N = a.DEPTH_COMPONENT16), N;
  }
  function T(A, M) {
    return p(A) === !0 || A.isFramebufferTexture && A.minFilter !== 1003 && A.minFilter !== 1006 ? Math.log2(Math.max(M.width, M.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? M.mipmaps.length : 1;
  }
  function E(A) {
    const M = A.target;
    M.removeEventListener("dispose", E), w(M), M.isVideoTexture && d.delete(M);
  }
  function R(A) {
    const M = A.target;
    M.removeEventListener("dispose", R), Y(M);
  }
  function w(A) {
    const M = n.get(A);
    if (M.__webglInit === void 0) return;
    const N = A.source, X = h.get(N);
    if (X) {
      const J = X[M.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && D(A), Object.keys(X).length === 0 && h.delete(N);
    }
    n.remove(A);
  }
  function D(A) {
    const M = n.get(A);
    a.deleteTexture(M.__webglTexture);
    const N = A.source, X = h.get(N);
    delete X[M.__cacheKey], r.memory.textures--;
  }
  function Y(A) {
    const M = n.get(A);
    if (A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget)
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(M.__webglFramebuffer[X]))
          for (let J = 0; J < M.__webglFramebuffer[X].length; J++) a.deleteFramebuffer(M.__webglFramebuffer[X][J]);
        else
          a.deleteFramebuffer(M.__webglFramebuffer[X]);
        M.__webglDepthbuffer && a.deleteRenderbuffer(M.__webglDepthbuffer[X]);
      }
    else {
      if (Array.isArray(M.__webglFramebuffer))
        for (let X = 0; X < M.__webglFramebuffer.length; X++) a.deleteFramebuffer(M.__webglFramebuffer[X]);
      else
        a.deleteFramebuffer(M.__webglFramebuffer);
      if (M.__webglDepthbuffer && a.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && a.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer)
        for (let X = 0; X < M.__webglColorRenderbuffer.length; X++)
          M.__webglColorRenderbuffer[X] && a.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);
      M.__webglDepthRenderbuffer && a.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const N = A.textures;
    for (let X = 0, J = N.length; X < J; X++) {
      const q = n.get(N[X]);
      q.__webglTexture && (a.deleteTexture(q.__webglTexture), r.memory.textures--), n.remove(N[X]);
    }
    n.remove(A);
  }
  let b = 0;
  function y() {
    b = 0;
  }
  function B() {
    const A = b;
    return A >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + i.maxTextures), b += 1, A;
  }
  function G(A) {
    const M = [];
    return M.push(A.wrapS), M.push(A.wrapT), M.push(A.wrapR || 0), M.push(A.magFilter), M.push(A.minFilter), M.push(A.anisotropy), M.push(A.internalFormat), M.push(A.format), M.push(A.type), M.push(A.generateMipmaps), M.push(A.premultiplyAlpha), M.push(A.flipY), M.push(A.unpackAlignment), M.push(A.colorSpace), M.join();
  }
  function V(A, M) {
    const N = n.get(A);
    if (A.isVideoTexture && Ee(A), A.isRenderTargetTexture === !1 && A.version > 0 && N.__version !== A.version) {
      const X = A.image;
      if (X === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        se(N, A, M);
        return;
      }
    }
    t.bindTexture(a.TEXTURE_2D, N.__webglTexture, a.TEXTURE0 + M);
  }
  function j(A, M) {
    const N = n.get(A);
    if (A.version > 0 && N.__version !== A.version) {
      se(N, A, M);
      return;
    }
    t.bindTexture(a.TEXTURE_2D_ARRAY, N.__webglTexture, a.TEXTURE0 + M);
  }
  function O(A, M) {
    const N = n.get(A);
    if (A.version > 0 && N.__version !== A.version) {
      se(N, A, M);
      return;
    }
    t.bindTexture(a.TEXTURE_3D, N.__webglTexture, a.TEXTURE0 + M);
  }
  function K(A, M) {
    const N = n.get(A);
    if (A.version > 0 && N.__version !== A.version) {
      H(N, A, M);
      return;
    }
    t.bindTexture(a.TEXTURE_CUBE_MAP, N.__webglTexture, a.TEXTURE0 + M);
  }
  const z = {
    1e3: a.REPEAT,
    1001: a.CLAMP_TO_EDGE,
    1002: a.MIRRORED_REPEAT
  }, ie = {
    1003: a.NEAREST,
    1004: a.NEAREST_MIPMAP_NEAREST,
    1005: a.NEAREST_MIPMAP_LINEAR,
    1006: a.LINEAR,
    1007: a.LINEAR_MIPMAP_NEAREST,
    1008: a.LINEAR_MIPMAP_LINEAR
  }, ce = {
    512: a.NEVER,
    519: a.ALWAYS,
    513: a.LESS,
    515: a.LEQUAL,
    514: a.EQUAL,
    518: a.GEQUAL,
    516: a.GREATER,
    517: a.NOTEQUAL
  };
  function ge(A, M) {
    if (M.type === 1015 && e.has("OES_texture_float_linear") === !1 && (M.magFilter === 1006 || M.magFilter === 1007 || M.magFilter === 1005 || M.magFilter === 1008 || M.minFilter === 1006 || M.minFilter === 1007 || M.minFilter === 1005 || M.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), a.texParameteri(A, a.TEXTURE_WRAP_S, z[M.wrapS]), a.texParameteri(A, a.TEXTURE_WRAP_T, z[M.wrapT]), (A === a.TEXTURE_3D || A === a.TEXTURE_2D_ARRAY) && a.texParameteri(A, a.TEXTURE_WRAP_R, z[M.wrapR]), a.texParameteri(A, a.TEXTURE_MAG_FILTER, ie[M.magFilter]), a.texParameteri(A, a.TEXTURE_MIN_FILTER, ie[M.minFilter]), M.compareFunction && (a.texParameteri(A, a.TEXTURE_COMPARE_MODE, a.COMPARE_REF_TO_TEXTURE), a.texParameteri(A, a.TEXTURE_COMPARE_FUNC, ce[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (M.magFilter === 1003 || M.minFilter !== 1005 && M.minFilter !== 1008 || M.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        a.texParameterf(A, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy;
      }
    }
  }
  function Ne(A, M) {
    let N = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, M.addEventListener("dispose", E));
    const X = M.source;
    let J = h.get(X);
    J === void 0 && (J = {}, h.set(X, J));
    const q = G(M);
    if (q !== A.__cacheKey) {
      J[q] === void 0 && (J[q] = {
        texture: a.createTexture(),
        usedTimes: 0
      }, r.memory.textures++, N = !0), J[q].usedTimes++;
      const Te = J[A.__cacheKey];
      Te !== void 0 && (J[A.__cacheKey].usedTimes--, Te.usedTimes === 0 && D(M)), A.__cacheKey = q, A.__webglTexture = J[q].texture;
    }
    return N;
  }
  function se(A, M, N) {
    let X = a.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (X = a.TEXTURE_2D_ARRAY), M.isData3DTexture && (X = a.TEXTURE_3D);
    const J = Ne(A, M), q = M.source;
    t.bindTexture(X, A.__webglTexture, a.TEXTURE0 + N);
    const Te = n.get(q);
    if (q.version !== Te.__version || J === !0) {
      t.activeTexture(a.TEXTURE0 + N);
      const le = Xe.getPrimaries(Xe.workingColorSpace), be = M.colorSpace === Mn ? null : Xe.getPrimaries(M.colorSpace), qe = M.colorSpace === Mn || le === be ? a.NONE : a.BROWSER_DEFAULT_WEBGL;
      a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, M.flipY), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), a.pixelStorei(a.UNPACK_ALIGNMENT, M.unpackAlignment), a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL, qe);
      let te = _(M.image, !1, i.maxTextureSize);
      te = Be(M, te);
      const xe = s.convert(M.format, M.colorSpace), Fe = s.convert(M.type);
      let ke = x(M.internalFormat, xe, Fe, M.colorSpace, M.isVideoTexture);
      ge(X, M);
      let Me;
      const We = M.mipmaps, Oe = M.isVideoTexture !== !0, tt = Te.__version === void 0 || J === !0, L = q.dataReady, pe = T(M, te);
      if (M.isDepthTexture)
        ke = v(M.format === 1027, M.type), tt && (Oe ? t.texStorage2D(a.TEXTURE_2D, 1, ke, te.width, te.height) : t.texImage2D(a.TEXTURE_2D, 0, ke, te.width, te.height, 0, xe, Fe, null));
      else if (M.isDataTexture)
        if (We.length > 0) {
          Oe && tt && t.texStorage2D(a.TEXTURE_2D, pe, ke, We[0].width, We[0].height);
          for (let W = 0, $ = We.length; W < $; W++)
            Me = We[W], Oe ? L && t.texSubImage2D(a.TEXTURE_2D, W, 0, 0, Me.width, Me.height, xe, Fe, Me.data) : t.texImage2D(a.TEXTURE_2D, W, ke, Me.width, Me.height, 0, xe, Fe, Me.data);
          M.generateMipmaps = !1;
        } else
          Oe ? (tt && t.texStorage2D(a.TEXTURE_2D, pe, ke, te.width, te.height), L && t.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, te.width, te.height, xe, Fe, te.data)) : t.texImage2D(a.TEXTURE_2D, 0, ke, te.width, te.height, 0, xe, Fe, te.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Oe && tt && t.texStorage3D(a.TEXTURE_2D_ARRAY, pe, ke, We[0].width, We[0].height, te.depth);
          for (let W = 0, $ = We.length; W < $; W++)
            if (Me = We[W], M.format !== 1023)
              if (xe !== null)
                if (Oe) {
                  if (L)
                    if (M.layerUpdates.size > 0) {
                      const ue = Tr(Me.width, Me.height, M.format, M.type);
                      for (const me of M.layerUpdates) {
                        const je = Me.data.subarray(
                          me * ue / Me.data.BYTES_PER_ELEMENT,
                          (me + 1) * ue / Me.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY, W, 0, 0, me, Me.width, Me.height, 1, xe, je, 0, 0);
                      }
                      M.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY, W, 0, 0, 0, Me.width, Me.height, te.depth, xe, Me.data, 0, 0);
                } else
                  t.compressedTexImage3D(a.TEXTURE_2D_ARRAY, W, ke, Me.width, Me.height, te.depth, 0, Me.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Oe ? L && t.texSubImage3D(a.TEXTURE_2D_ARRAY, W, 0, 0, 0, Me.width, Me.height, te.depth, xe, Fe, Me.data) : t.texImage3D(a.TEXTURE_2D_ARRAY, W, ke, Me.width, Me.height, te.depth, 0, xe, Fe, Me.data);
        } else {
          Oe && tt && t.texStorage2D(a.TEXTURE_2D, pe, ke, We[0].width, We[0].height);
          for (let W = 0, $ = We.length; W < $; W++)
            Me = We[W], M.format !== 1023 ? xe !== null ? Oe ? L && t.compressedTexSubImage2D(a.TEXTURE_2D, W, 0, 0, Me.width, Me.height, xe, Me.data) : t.compressedTexImage2D(a.TEXTURE_2D, W, ke, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? L && t.texSubImage2D(a.TEXTURE_2D, W, 0, 0, Me.width, Me.height, xe, Fe, Me.data) : t.texImage2D(a.TEXTURE_2D, W, ke, Me.width, Me.height, 0, xe, Fe, Me.data);
        }
      else if (M.isDataArrayTexture)
        if (Oe) {
          if (tt && t.texStorage3D(a.TEXTURE_2D_ARRAY, pe, ke, te.width, te.height, te.depth), L)
            if (M.layerUpdates.size > 0) {
              const W = Tr(te.width, te.height, M.format, M.type);
              for (const $ of M.layerUpdates) {
                const ue = te.data.subarray(
                  $ * W / te.data.BYTES_PER_ELEMENT,
                  ($ + 1) * W / te.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, $, te.width, te.height, 1, xe, Fe, ue);
              }
              M.clearLayerUpdates();
            } else
              t.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, xe, Fe, te.data);
        } else
          t.texImage3D(a.TEXTURE_2D_ARRAY, 0, ke, te.width, te.height, te.depth, 0, xe, Fe, te.data);
      else if (M.isData3DTexture)
        Oe ? (tt && t.texStorage3D(a.TEXTURE_3D, pe, ke, te.width, te.height, te.depth), L && t.texSubImage3D(a.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, xe, Fe, te.data)) : t.texImage3D(a.TEXTURE_3D, 0, ke, te.width, te.height, te.depth, 0, xe, Fe, te.data);
      else if (M.isFramebufferTexture) {
        if (tt)
          if (Oe)
            t.texStorage2D(a.TEXTURE_2D, pe, ke, te.width, te.height);
          else {
            let W = te.width, $ = te.height;
            for (let ue = 0; ue < pe; ue++)
              t.texImage2D(a.TEXTURE_2D, ue, ke, W, $, 0, xe, Fe, null), W >>= 1, $ >>= 1;
          }
      } else if (We.length > 0) {
        if (Oe && tt) {
          const W = Re(We[0]);
          t.texStorage2D(a.TEXTURE_2D, pe, ke, W.width, W.height);
        }
        for (let W = 0, $ = We.length; W < $; W++)
          Me = We[W], Oe ? L && t.texSubImage2D(a.TEXTURE_2D, W, 0, 0, xe, Fe, Me) : t.texImage2D(a.TEXTURE_2D, W, ke, xe, Fe, Me);
        M.generateMipmaps = !1;
      } else if (Oe) {
        if (tt) {
          const W = Re(te);
          t.texStorage2D(a.TEXTURE_2D, pe, ke, W.width, W.height);
        }
        L && t.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, xe, Fe, te);
      } else
        t.texImage2D(a.TEXTURE_2D, 0, ke, xe, Fe, te);
      p(M) && m(X), Te.__version = q.version, M.onUpdate && M.onUpdate(M);
    }
    A.__version = M.version;
  }
  function H(A, M, N) {
    if (M.image.length !== 6) return;
    const X = Ne(A, M), J = M.source;
    t.bindTexture(a.TEXTURE_CUBE_MAP, A.__webglTexture, a.TEXTURE0 + N);
    const q = n.get(J);
    if (J.version !== q.__version || X === !0) {
      t.activeTexture(a.TEXTURE0 + N);
      const Te = Xe.getPrimaries(Xe.workingColorSpace), le = M.colorSpace === Mn ? null : Xe.getPrimaries(M.colorSpace), be = M.colorSpace === Mn || Te === le ? a.NONE : a.BROWSER_DEFAULT_WEBGL;
      a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, M.flipY), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), a.pixelStorei(a.UNPACK_ALIGNMENT, M.unpackAlignment), a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL, be);
      const qe = M.isCompressedTexture || M.image[0].isCompressedTexture, te = M.image[0] && M.image[0].isDataTexture, xe = [];
      for (let $ = 0; $ < 6; $++)
        !qe && !te ? xe[$] = _(M.image[$], !0, i.maxCubemapSize) : xe[$] = te ? M.image[$].image : M.image[$], xe[$] = Be(M, xe[$]);
      const Fe = xe[0], ke = s.convert(M.format, M.colorSpace), Me = s.convert(M.type), We = x(M.internalFormat, ke, Me, M.colorSpace), Oe = M.isVideoTexture !== !0, tt = q.__version === void 0 || X === !0, L = J.dataReady;
      let pe = T(M, Fe);
      ge(a.TEXTURE_CUBE_MAP, M);
      let W;
      if (qe) {
        Oe && tt && t.texStorage2D(a.TEXTURE_CUBE_MAP, pe, We, Fe.width, Fe.height);
        for (let $ = 0; $ < 6; $++) {
          W = xe[$].mipmaps;
          for (let ue = 0; ue < W.length; ue++) {
            const me = W[ue];
            M.format !== 1023 ? ke !== null ? Oe ? L && t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue, 0, 0, me.width, me.height, ke, me.data) : t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue, We, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Oe ? L && t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue, 0, 0, me.width, me.height, ke, Me, me.data) : t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue, We, me.width, me.height, 0, ke, Me, me.data);
          }
        }
      } else {
        if (W = M.mipmaps, Oe && tt) {
          W.length > 0 && pe++;
          const $ = Re(xe[0]);
          t.texStorage2D(a.TEXTURE_CUBE_MAP, pe, We, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (te) {
            Oe ? L && t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, xe[$].width, xe[$].height, ke, Me, xe[$].data) : t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, We, xe[$].width, xe[$].height, 0, ke, Me, xe[$].data);
            for (let ue = 0; ue < W.length; ue++) {
              const je = W[ue].image[$].image;
              Oe ? L && t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue + 1, 0, 0, je.width, je.height, ke, Me, je.data) : t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue + 1, We, je.width, je.height, 0, ke, Me, je.data);
            }
          } else {
            Oe ? L && t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, ke, Me, xe[$]) : t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, We, ke, Me, xe[$]);
            for (let ue = 0; ue < W.length; ue++) {
              const me = W[ue];
              Oe ? L && t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue + 1, 0, 0, ke, Me, me.image[$]) : t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + $, ue + 1, We, ke, Me, me.image[$]);
            }
          }
      }
      p(M) && m(a.TEXTURE_CUBE_MAP), q.__version = J.version, M.onUpdate && M.onUpdate(M);
    }
    A.__version = M.version;
  }
  function Z(A, M, N, X, J, q) {
    const Te = s.convert(N.format, N.colorSpace), le = s.convert(N.type), be = x(N.internalFormat, Te, le, N.colorSpace);
    if (!n.get(M).__hasExternalTextures) {
      const te = Math.max(1, M.width >> q), xe = Math.max(1, M.height >> q);
      J === a.TEXTURE_3D || J === a.TEXTURE_2D_ARRAY ? t.texImage3D(J, q, be, te, xe, M.depth, 0, Te, le, null) : t.texImage2D(J, q, be, te, xe, 0, Te, le, null);
    }
    t.bindFramebuffer(a.FRAMEBUFFER, A), Pe(M) ? o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER, X, J, n.get(N).__webglTexture, 0, Ce(M)) : (J === a.TEXTURE_2D || J >= a.TEXTURE_CUBE_MAP_POSITIVE_X && J <= a.TEXTURE_CUBE_MAP_NEGATIVE_Z) && a.framebufferTexture2D(a.FRAMEBUFFER, X, J, n.get(N).__webglTexture, q), t.bindFramebuffer(a.FRAMEBUFFER, null);
  }
  function _e(A, M, N) {
    if (a.bindRenderbuffer(a.RENDERBUFFER, A), M.depthBuffer) {
      const X = M.depthTexture, J = X && X.isDepthTexture ? X.type : null, q = v(M.stencilBuffer, J), Te = M.stencilBuffer ? a.DEPTH_STENCIL_ATTACHMENT : a.DEPTH_ATTACHMENT, le = Ce(M);
      Pe(M) ? o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER, le, q, M.width, M.height) : N ? a.renderbufferStorageMultisample(a.RENDERBUFFER, le, q, M.width, M.height) : a.renderbufferStorage(a.RENDERBUFFER, q, M.width, M.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, Te, a.RENDERBUFFER, A);
    } else {
      const X = M.textures;
      for (let J = 0; J < X.length; J++) {
        const q = X[J], Te = s.convert(q.format, q.colorSpace), le = s.convert(q.type), be = x(q.internalFormat, Te, le, q.colorSpace), qe = Ce(M);
        N && Pe(M) === !1 ? a.renderbufferStorageMultisample(a.RENDERBUFFER, qe, be, M.width, M.height) : Pe(M) ? o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER, qe, be, M.width, M.height) : a.renderbufferStorage(a.RENDERBUFFER, be, M.width, M.height);
      }
    }
    a.bindRenderbuffer(a.RENDERBUFFER, null);
  }
  function ae(A, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(a.FRAMEBUFFER, A), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), V(M.depthTexture, 0);
    const X = n.get(M.depthTexture).__webglTexture, J = Ce(M);
    if (M.depthTexture.format === 1026)
      Pe(M) ? o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, X, 0, J) : a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, X, 0);
    else if (M.depthTexture.format === 1027)
      Pe(M) ? o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_2D, X, 0, J) : a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_2D, X, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Q(A) {
    const M = n.get(A), N = A.isWebGLCubeRenderTarget === !0;
    if (M.__boundDepthTexture !== A.depthTexture) {
      const X = A.depthTexture;
      if (M.__depthDisposeCallback && M.__depthDisposeCallback(), X) {
        const J = () => {
          delete M.__boundDepthTexture, delete M.__depthDisposeCallback, X.removeEventListener("dispose", J);
        };
        X.addEventListener("dispose", J), M.__depthDisposeCallback = J;
      }
      M.__boundDepthTexture = X;
    }
    if (A.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      ae(M.__webglFramebuffer, A);
    } else if (N) {
      M.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        if (t.bindFramebuffer(a.FRAMEBUFFER, M.__webglFramebuffer[X]), M.__webglDepthbuffer[X] === void 0)
          M.__webglDepthbuffer[X] = a.createRenderbuffer(), _e(M.__webglDepthbuffer[X], A, !1);
        else {
          const J = A.stencilBuffer ? a.DEPTH_STENCIL_ATTACHMENT : a.DEPTH_ATTACHMENT, q = M.__webglDepthbuffer[X];
          a.bindRenderbuffer(a.RENDERBUFFER, q), a.framebufferRenderbuffer(a.FRAMEBUFFER, J, a.RENDERBUFFER, q);
        }
    } else if (t.bindFramebuffer(a.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0)
      M.__webglDepthbuffer = a.createRenderbuffer(), _e(M.__webglDepthbuffer, A, !1);
    else {
      const X = A.stencilBuffer ? a.DEPTH_STENCIL_ATTACHMENT : a.DEPTH_ATTACHMENT, J = M.__webglDepthbuffer;
      a.bindRenderbuffer(a.RENDERBUFFER, J), a.framebufferRenderbuffer(a.FRAMEBUFFER, X, a.RENDERBUFFER, J);
    }
    t.bindFramebuffer(a.FRAMEBUFFER, null);
  }
  function ee(A, M, N) {
    const X = n.get(A);
    M !== void 0 && Z(X.__webglFramebuffer, A, A.texture, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, 0), N !== void 0 && Q(A);
  }
  function he(A) {
    const M = A.texture, N = n.get(A), X = n.get(M);
    A.addEventListener("dispose", R);
    const J = A.textures, q = A.isWebGLCubeRenderTarget === !0, Te = J.length > 1;
    if (Te || (X.__webglTexture === void 0 && (X.__webglTexture = a.createTexture()), X.__version = M.version, r.memory.textures++), q) {
      N.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++)
        if (M.mipmaps && M.mipmaps.length > 0) {
          N.__webglFramebuffer[le] = [];
          for (let be = 0; be < M.mipmaps.length; be++)
            N.__webglFramebuffer[le][be] = a.createFramebuffer();
        } else
          N.__webglFramebuffer[le] = a.createFramebuffer();
    } else {
      if (M.mipmaps && M.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let le = 0; le < M.mipmaps.length; le++)
          N.__webglFramebuffer[le] = a.createFramebuffer();
      } else
        N.__webglFramebuffer = a.createFramebuffer();
      if (Te)
        for (let le = 0, be = J.length; le < be; le++) {
          const qe = n.get(J[le]);
          qe.__webglTexture === void 0 && (qe.__webglTexture = a.createTexture(), r.memory.textures++);
        }
      if (A.samples > 0 && Pe(A) === !1) {
        N.__webglMultisampledFramebuffer = a.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(a.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let le = 0; le < J.length; le++) {
          const be = J[le];
          N.__webglColorRenderbuffer[le] = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, N.__webglColorRenderbuffer[le]);
          const qe = s.convert(be.format, be.colorSpace), te = s.convert(be.type), xe = x(be.internalFormat, qe, te, be.colorSpace, A.isXRRenderTarget === !0), Fe = Ce(A);
          a.renderbufferStorageMultisample(a.RENDERBUFFER, Fe, xe, A.width, A.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0 + le, a.RENDERBUFFER, N.__webglColorRenderbuffer[le]);
        }
        a.bindRenderbuffer(a.RENDERBUFFER, null), A.depthBuffer && (N.__webglDepthRenderbuffer = a.createRenderbuffer(), _e(N.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(a.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(a.TEXTURE_CUBE_MAP, X.__webglTexture), ge(a.TEXTURE_CUBE_MAP, M);
      for (let le = 0; le < 6; le++)
        if (M.mipmaps && M.mipmaps.length > 0)
          for (let be = 0; be < M.mipmaps.length; be++)
            Z(N.__webglFramebuffer[le][be], A, M, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + le, be);
        else
          Z(N.__webglFramebuffer[le], A, M, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0);
      p(M) && m(a.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Te) {
      for (let le = 0, be = J.length; le < be; le++) {
        const qe = J[le], te = n.get(qe);
        t.bindTexture(a.TEXTURE_2D, te.__webglTexture), ge(a.TEXTURE_2D, qe), Z(N.__webglFramebuffer, A, qe, a.COLOR_ATTACHMENT0 + le, a.TEXTURE_2D, 0), p(qe) && m(a.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let le = a.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (le = A.isWebGL3DRenderTarget ? a.TEXTURE_3D : a.TEXTURE_2D_ARRAY), t.bindTexture(le, X.__webglTexture), ge(le, M), M.mipmaps && M.mipmaps.length > 0)
        for (let be = 0; be < M.mipmaps.length; be++)
          Z(N.__webglFramebuffer[be], A, M, a.COLOR_ATTACHMENT0, le, be);
      else
        Z(N.__webglFramebuffer, A, M, a.COLOR_ATTACHMENT0, le, 0);
      p(M) && m(le), t.unbindTexture();
    }
    A.depthBuffer && Q(A);
  }
  function de(A) {
    const M = A.textures;
    for (let N = 0, X = M.length; N < X; N++) {
      const J = M[N];
      if (p(J)) {
        const q = A.isWebGLCubeRenderTarget ? a.TEXTURE_CUBE_MAP : a.TEXTURE_2D, Te = n.get(J).__webglTexture;
        t.bindTexture(q, Te), m(q), t.unbindTexture();
      }
    }
  }
  const ve = [], C = [];
  function st(A) {
    if (A.samples > 0) {
      if (Pe(A) === !1) {
        const M = A.textures, N = A.width, X = A.height;
        let J = a.COLOR_BUFFER_BIT;
        const q = A.stencilBuffer ? a.DEPTH_STENCIL_ATTACHMENT : a.DEPTH_ATTACHMENT, Te = n.get(A), le = M.length > 1;
        if (le)
          for (let be = 0; be < M.length; be++)
            t.bindFramebuffer(a.FRAMEBUFFER, Te.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0 + be, a.RENDERBUFFER, null), t.bindFramebuffer(a.FRAMEBUFFER, Te.__webglFramebuffer), a.framebufferTexture2D(a.DRAW_FRAMEBUFFER, a.COLOR_ATTACHMENT0 + be, a.TEXTURE_2D, null, 0);
        t.bindFramebuffer(a.READ_FRAMEBUFFER, Te.__webglMultisampledFramebuffer), t.bindFramebuffer(a.DRAW_FRAMEBUFFER, Te.__webglFramebuffer);
        for (let be = 0; be < M.length; be++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (J |= a.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (J |= a.STENCIL_BUFFER_BIT)), le) {
            a.framebufferRenderbuffer(a.READ_FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.RENDERBUFFER, Te.__webglColorRenderbuffer[be]);
            const qe = n.get(M[be]).__webglTexture;
            a.framebufferTexture2D(a.DRAW_FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, qe, 0);
          }
          a.blitFramebuffer(0, 0, N, X, 0, 0, N, X, J, a.NEAREST), l === !0 && (ve.length = 0, C.length = 0, ve.push(a.COLOR_ATTACHMENT0 + be), A.depthBuffer && A.resolveDepthBuffer === !1 && (ve.push(q), C.push(q), a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER, C)), a.invalidateFramebuffer(a.READ_FRAMEBUFFER, ve));
        }
        if (t.bindFramebuffer(a.READ_FRAMEBUFFER, null), t.bindFramebuffer(a.DRAW_FRAMEBUFFER, null), le)
          for (let be = 0; be < M.length; be++) {
            t.bindFramebuffer(a.FRAMEBUFFER, Te.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0 + be, a.RENDERBUFFER, Te.__webglColorRenderbuffer[be]);
            const qe = n.get(M[be]).__webglTexture;
            t.bindFramebuffer(a.FRAMEBUFFER, Te.__webglFramebuffer), a.framebufferTexture2D(a.DRAW_FRAMEBUFFER, a.COLOR_ATTACHMENT0 + be, a.TEXTURE_2D, qe, 0);
          }
        t.bindFramebuffer(a.DRAW_FRAMEBUFFER, Te.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && l) {
        const M = A.stencilBuffer ? a.DEPTH_STENCIL_ATTACHMENT : a.DEPTH_ATTACHMENT;
        a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER, [M]);
      }
    }
  }
  function Ce(A) {
    return Math.min(i.maxSamples, A.samples);
  }
  function Pe(A) {
    const M = n.get(A);
    return A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function Ee(A) {
    const M = r.render.frame;
    d.get(A) !== M && (d.set(A, M), A.update());
  }
  function Be(A, M) {
    const N = A.colorSpace, X = A.format, J = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || N !== dt && N !== Mn && (Xe.getTransfer(N) === nt ? (X !== 1023 || J !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), M;
  }
  function Re(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width, c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth, c.height = A.displayHeight) : (c.width = A.width, c.height = A.height), c;
  }
  this.allocateTextureUnit = B, this.resetTextureUnits = y, this.setTexture2D = V, this.setTexture2DArray = j, this.setTexture3D = O, this.setTextureCube = K, this.rebindTextures = ee, this.setupRenderTarget = he, this.updateRenderTargetMipmap = de, this.updateMultisampleRenderTarget = st, this.setupDepthRenderbuffer = Q, this.setupFrameBufferTexture = Z, this.useMultisampledRTT = Pe;
}
function $u(a, e) {
  function t(n, i = Mn) {
    let s;
    const r = Xe.getTransfer(i);
    if (n === 1009) return a.UNSIGNED_BYTE;
    if (n === 1017) return a.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return a.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return a.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return a.BYTE;
    if (n === 1011) return a.SHORT;
    if (n === 1012) return a.UNSIGNED_SHORT;
    if (n === 1013) return a.INT;
    if (n === 1014) return a.UNSIGNED_INT;
    if (n === 1015) return a.FLOAT;
    if (n === 1016) return a.HALF_FLOAT;
    if (n === 1021) return a.ALPHA;
    if (n === 1022) return a.RGB;
    if (n === 1023) return a.RGBA;
    if (n === 1024) return a.LUMINANCE;
    if (n === 1025) return a.LUMINANCE_ALPHA;
    if (n === 1026) return a.DEPTH_COMPONENT;
    if (n === 1027) return a.DEPTH_STENCIL;
    if (n === 1028) return a.RED;
    if (n === 1029) return a.RED_INTEGER;
    if (n === 1030) return a.RG;
    if (n === 1031) return a.RG_INTEGER;
    if (n === 1033) return a.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (r === nt)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return r === nt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return r === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return r === nt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? a.UNSIGNED_INT_24_8 : a[n] !== void 0 ? a[n] : null;
  }
  return { convert: t };
}
class Zu extends yt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class dn extends at {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ju = { type: "move" };
class $s {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new dn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new dn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new dn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, r = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        r = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, n), m = this._getHandJoint(c, _);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const d = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], h = d.position.distanceTo(u.position), f = 0.02, g = 5e-3;
        c.inputState.pinching && h > f + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && h <= f - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ju)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = r !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new dn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Qu = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, ef = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class tf {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new gt(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new vt({
        vertexShader: Qu,
        fragmentShader: ef,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new bt(new ni(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class nf extends Nn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, r = null, o = "local-floor", l = 1, c = null, d = null, u = null, h = null, f = null, g = null;
    const _ = new tf(), p = t.getContextAttributes();
    let m = null, x = null;
    const v = [], T = [], E = new De();
    let R = null;
    const w = new yt();
    w.layers.enable(1), w.viewport = new Ve();
    const D = new yt();
    D.layers.enable(2), D.viewport = new Ve();
    const Y = [w, D], b = new Zu();
    b.layers.enable(1), b.layers.enable(2);
    let y = null, B = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(H) {
      let Z = v[H];
      return Z === void 0 && (Z = new $s(), v[H] = Z), Z.getTargetRaySpace();
    }, this.getControllerGrip = function(H) {
      let Z = v[H];
      return Z === void 0 && (Z = new $s(), v[H] = Z), Z.getGripSpace();
    }, this.getHand = function(H) {
      let Z = v[H];
      return Z === void 0 && (Z = new $s(), v[H] = Z), Z.getHandSpace();
    };
    function G(H) {
      const Z = T.indexOf(H.inputSource);
      if (Z === -1)
        return;
      const _e = v[Z];
      _e !== void 0 && (_e.update(H.inputSource, H.frame, c || r), _e.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function V() {
      i.removeEventListener("select", G), i.removeEventListener("selectstart", G), i.removeEventListener("selectend", G), i.removeEventListener("squeeze", G), i.removeEventListener("squeezestart", G), i.removeEventListener("squeezeend", G), i.removeEventListener("end", V), i.removeEventListener("inputsourceschange", j);
      for (let H = 0; H < v.length; H++) {
        const Z = T[H];
        Z !== null && (T[H] = null, v[H].disconnect(Z));
      }
      y = null, B = null, _.reset(), e.setRenderTarget(m), f = null, h = null, u = null, i = null, x = null, se.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(E.width, E.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(H) {
      s = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(H) {
      o = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || r;
    }, this.setReferenceSpace = function(H) {
      c = H;
    }, this.getBaseLayer = function() {
      return h !== null ? h : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(H) {
      if (i = H, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", G), i.addEventListener("selectstart", G), i.addEventListener("selectend", G), i.addEventListener("squeeze", G), i.addEventListener("squeezestart", G), i.addEventListener("squeezeend", G), i.addEventListener("end", V), i.addEventListener("inputsourceschange", j), p.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(E), i.renderState.layers === void 0) {
          const Z = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, t, Z), i.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), x = new Rt(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: p.stencil
            }
          );
        } else {
          let Z = null, _e = null, ae = null;
          p.depth && (ae = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Z = p.stencil ? 1027 : 1026, _e = p.stencil ? 1020 : 1014);
          const Q = {
            colorFormat: t.RGBA8,
            depthFormat: ae,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(Q), i.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), x = new Rt(
            h.textureWidth,
            h.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new lo(h.textureWidth, h.textureHeight, _e, void 0, void 0, void 0, void 0, void 0, void 0, Z),
              stencilBuffer: p.stencil,
              colorSpace: e.outputColorSpace,
              samples: p.antialias ? 4 : 0,
              resolveDepthBuffer: h.ignoreDepthValues === !1
            }
          );
        }
        x.isXRRenderTarget = !0, this.setFoveation(l), c = null, r = await i.requestReferenceSpace(o), se.setContext(i), se.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function j(H) {
      for (let Z = 0; Z < H.removed.length; Z++) {
        const _e = H.removed[Z], ae = T.indexOf(_e);
        ae >= 0 && (T[ae] = null, v[ae].disconnect(_e));
      }
      for (let Z = 0; Z < H.added.length; Z++) {
        const _e = H.added[Z];
        let ae = T.indexOf(_e);
        if (ae === -1) {
          for (let ee = 0; ee < v.length; ee++)
            if (ee >= T.length) {
              T.push(_e), ae = ee;
              break;
            } else if (T[ee] === null) {
              T[ee] = _e, ae = ee;
              break;
            }
          if (ae === -1) break;
        }
        const Q = v[ae];
        Q && Q.connect(_e);
      }
    }
    const O = new P(), K = new P();
    function z(H, Z, _e) {
      O.setFromMatrixPosition(Z.matrixWorld), K.setFromMatrixPosition(_e.matrixWorld);
      const ae = O.distanceTo(K), Q = Z.projectionMatrix.elements, ee = _e.projectionMatrix.elements, he = Q[14] / (Q[10] - 1), de = Q[14] / (Q[10] + 1), ve = (Q[9] + 1) / Q[5], C = (Q[9] - 1) / Q[5], st = (Q[8] - 1) / Q[0], Ce = (ee[8] + 1) / ee[0], Pe = he * st, Ee = he * Ce, Be = ae / (-st + Ce), Re = Be * -st;
      if (Z.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(Re), H.translateZ(Be), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert(), Q[10] === -1)
        H.projectionMatrix.copy(Z.projectionMatrix), H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);
      else {
        const A = he + Be, M = de + Be, N = Pe - Re, X = Ee + (ae - Re), J = ve * de / M * A, q = C * de / M * A;
        H.projectionMatrix.makePerspective(N, X, J, q, A, M), H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
      }
    }
    function ie(H, Z) {
      Z === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(Z.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function(H) {
      if (i === null) return;
      let Z = H.near, _e = H.far;
      _.texture !== null && (_.depthNear > 0 && (Z = _.depthNear), _.depthFar > 0 && (_e = _.depthFar)), b.near = D.near = w.near = Z, b.far = D.far = w.far = _e, (y !== b.near || B !== b.far) && (i.updateRenderState({
        depthNear: b.near,
        depthFar: b.far
      }), y = b.near, B = b.far);
      const ae = H.parent, Q = b.cameras;
      ie(b, ae);
      for (let ee = 0; ee < Q.length; ee++)
        ie(Q[ee], ae);
      Q.length === 2 ? z(b, w, D) : b.projectionMatrix.copy(w.projectionMatrix), ce(H, b, ae);
    };
    function ce(H, Z, _e) {
      _e === null ? H.matrix.copy(Z.matrixWorld) : (H.matrix.copy(_e.matrixWorld), H.matrix.invert(), H.matrix.multiply(Z.matrixWorld)), H.matrix.decompose(H.position, H.quaternion, H.scale), H.updateMatrixWorld(!0), H.projectionMatrix.copy(Z.projectionMatrix), H.projectionMatrixInverse.copy(Z.projectionMatrixInverse), H.isPerspectiveCamera && (H.fov = ei * 2 * Math.atan(1 / H.projectionMatrix.elements[5]), H.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(h === null && f === null))
        return l;
    }, this.setFoveation = function(H) {
      l = H, h !== null && (h.fixedFoveation = H), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = H);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(b);
    };
    let ge = null;
    function Ne(H, Z) {
      if (d = Z.getViewerPose(c || r), g = Z, d !== null) {
        const _e = d.views;
        f !== null && (e.setRenderTargetFramebuffer(x, f.framebuffer), e.setRenderTarget(x));
        let ae = !1;
        _e.length !== b.cameras.length && (b.cameras.length = 0, ae = !0);
        for (let ee = 0; ee < _e.length; ee++) {
          const he = _e[ee];
          let de = null;
          if (f !== null)
            de = f.getViewport(he);
          else {
            const C = u.getViewSubImage(h, he);
            de = C.viewport, ee === 0 && (e.setRenderTargetTextures(
              x,
              C.colorTexture,
              h.ignoreDepthValues ? void 0 : C.depthStencilTexture
            ), e.setRenderTarget(x));
          }
          let ve = Y[ee];
          ve === void 0 && (ve = new yt(), ve.layers.enable(ee), ve.viewport = new Ve(), Y[ee] = ve), ve.matrix.fromArray(he.transform.matrix), ve.matrix.decompose(ve.position, ve.quaternion, ve.scale), ve.projectionMatrix.fromArray(he.projectionMatrix), ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(), ve.viewport.set(de.x, de.y, de.width, de.height), ee === 0 && (b.matrix.copy(ve.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), ae === !0 && b.cameras.push(ve);
        }
        const Q = i.enabledFeatures;
        if (Q && Q.includes("depth-sensing")) {
          const ee = u.getDepthInformation(_e[0]);
          ee && ee.isValid && ee.texture && _.init(e, ee, i.renderState);
        }
      }
      for (let _e = 0; _e < v.length; _e++) {
        const ae = T[_e], Q = v[_e];
        ae !== null && Q !== void 0 && Q.update(ae, Z, c || r);
      }
      ge && ge(H, Z), Z.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Z }), g = null;
    }
    const se = new oo();
    se.setAnimationLoop(Ne), this.setAnimationLoop = function(H) {
      ge = H;
    }, this.dispose = function() {
    };
  }
}
const Pn = /* @__PURE__ */ new Kt(), sf = /* @__PURE__ */ new Le();
function af(a, e) {
  function t(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, so(a)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function i(p, m, x, v, T) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? s(p, m) : m.isMeshToonMaterial ? (s(p, m), u(p, m)) : m.isMeshPhongMaterial ? (s(p, m), d(p, m)) : m.isMeshStandardMaterial ? (s(p, m), h(p, m), m.isMeshPhysicalMaterial && f(p, m, T)) : m.isMeshMatcapMaterial ? (s(p, m), g(p, m)) : m.isMeshDepthMaterial ? s(p, m) : m.isMeshDistanceMaterial ? (s(p, m), _(p, m)) : m.isMeshNormalMaterial ? s(p, m) : m.isLineBasicMaterial ? (r(p, m), m.isLineDashedMaterial && o(p, m)) : m.isPointsMaterial ? l(p, m, x, v) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function s(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, t(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === 1 && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, t(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === 1 && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, t(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, t(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const x = e.get(m), v = x.envMap, T = x.envMapRotation;
    v && (p.envMap.value = v, Pn.copy(T), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (Pn.y *= -1, Pn.z *= -1), p.envMapRotation.value.setFromMatrix4(sf.makeRotationFromEuler(Pn)), p.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, p.aoMapTransform));
  }
  function r(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, t(m.map, p.mapTransform));
  }
  function o(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, x, v) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * x, p.scale.value = v * 0.5, m.map && (p.map.value = m.map, t(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function d(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function u(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function h(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function f(p, m, x) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === 1 && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = x.texture, p.transmissionSamplerSize.value.set(x.width, x.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function _(p, m) {
    const x = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(x.matrixWorld), p.nearDistance.value = x.shadow.camera.near, p.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function rf(a, e, t, n) {
  let i = {}, s = {}, r = [];
  const o = a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(x, v) {
    const T = v.program;
    n.uniformBlockBinding(x, T);
  }
  function c(x, v) {
    let T = i[x.id];
    T === void 0 && (g(x), T = d(x), i[x.id] = T, x.addEventListener("dispose", p));
    const E = v.program;
    n.updateUBOMapping(x, E);
    const R = e.render.frame;
    s[x.id] !== R && (h(x), s[x.id] = R);
  }
  function d(x) {
    const v = u();
    x.__bindingPointIndex = v;
    const T = a.createBuffer(), E = x.__size, R = x.usage;
    return a.bindBuffer(a.UNIFORM_BUFFER, T), a.bufferData(a.UNIFORM_BUFFER, E, R), a.bindBuffer(a.UNIFORM_BUFFER, null), a.bindBufferBase(a.UNIFORM_BUFFER, v, T), T;
  }
  function u() {
    for (let x = 0; x < o; x++)
      if (r.indexOf(x) === -1)
        return r.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function h(x) {
    const v = i[x.id], T = x.uniforms, E = x.__cache;
    a.bindBuffer(a.UNIFORM_BUFFER, v);
    for (let R = 0, w = T.length; R < w; R++) {
      const D = Array.isArray(T[R]) ? T[R] : [T[R]];
      for (let Y = 0, b = D.length; Y < b; Y++) {
        const y = D[Y];
        if (f(y, R, Y, E) === !0) {
          const B = y.__offset, G = Array.isArray(y.value) ? y.value : [y.value];
          let V = 0;
          for (let j = 0; j < G.length; j++) {
            const O = G[j], K = _(O);
            typeof O == "number" || typeof O == "boolean" ? (y.__data[0] = O, a.bufferSubData(a.UNIFORM_BUFFER, B + V, y.__data)) : O.isMatrix3 ? (y.__data[0] = O.elements[0], y.__data[1] = O.elements[1], y.__data[2] = O.elements[2], y.__data[3] = 0, y.__data[4] = O.elements[3], y.__data[5] = O.elements[4], y.__data[6] = O.elements[5], y.__data[7] = 0, y.__data[8] = O.elements[6], y.__data[9] = O.elements[7], y.__data[10] = O.elements[8], y.__data[11] = 0) : (O.toArray(y.__data, V), V += K.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          a.bufferSubData(a.UNIFORM_BUFFER, B, y.__data);
        }
      }
    }
    a.bindBuffer(a.UNIFORM_BUFFER, null);
  }
  function f(x, v, T, E) {
    const R = x.value, w = v + "_" + T;
    if (E[w] === void 0)
      return typeof R == "number" || typeof R == "boolean" ? E[w] = R : E[w] = R.clone(), !0;
    {
      const D = E[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (D !== R)
          return E[w] = R, !0;
      } else if (D.equals(R) === !1)
        return D.copy(R), !0;
    }
    return !1;
  }
  function g(x) {
    const v = x.uniforms;
    let T = 0;
    const E = 16;
    for (let w = 0, D = v.length; w < D; w++) {
      const Y = Array.isArray(v[w]) ? v[w] : [v[w]];
      for (let b = 0, y = Y.length; b < y; b++) {
        const B = Y[b], G = Array.isArray(B.value) ? B.value : [B.value];
        for (let V = 0, j = G.length; V < j; V++) {
          const O = G[V], K = _(O), z = T % E, ie = z % K.boundary, ce = z + ie;
          T += ie, ce !== 0 && E - ce < K.storage && (T += E - ce), B.__data = new Float32Array(K.storage / Float32Array.BYTES_PER_ELEMENT), B.__offset = T, T += K.storage;
        }
      }
    }
    const R = T % E;
    return R > 0 && (T += E - R), x.__size = T, x.__cache = {}, this;
  }
  function _(x) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (v.boundary = 4, v.storage = 4) : x.isVector2 ? (v.boundary = 8, v.storage = 8) : x.isVector3 || x.isColor ? (v.boundary = 16, v.storage = 12) : x.isVector4 ? (v.boundary = 16, v.storage = 16) : x.isMatrix3 ? (v.boundary = 48, v.storage = 48) : x.isMatrix4 ? (v.boundary = 64, v.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), v;
  }
  function p(x) {
    const v = x.target;
    v.removeEventListener("dispose", p);
    const T = r.indexOf(v.__bindingPointIndex);
    r.splice(T, 1), a.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function m() {
    for (const x in i)
      a.deleteBuffer(i[x]);
    r = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: m
  };
}
class of {
  constructor(e = {}) {
    const {
      canvas: t = Ko(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: r = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: d = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let h;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      h = n.getContextAttributes().alpha;
    } else
      h = r;
    const f = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const m = [], x = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = mt, this.toneMapping = 0, this.toneMappingExposure = 1;
    const v = this;
    let T = !1, E = 0, R = 0, w = null, D = -1, Y = null;
    const b = new Ve(), y = new Ve();
    let B = null;
    const G = new re(0);
    let V = 0, j = t.width, O = t.height, K = 1, z = null, ie = null;
    const ce = new Ve(0, 0, j, O), ge = new Ve(0, 0, j, O);
    let Ne = !1;
    const se = new xa();
    let H = !1, Z = !1;
    const _e = new Le(), ae = new Le(), Q = new P(), ee = new Ve(), he = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let de = !1;
    function ve() {
      return w === null ? K : 1;
    }
    let C = n;
    function st(S, I) {
      return t.getContext(S, I);
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: d,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${_a}`), t.addEventListener("webglcontextlost", $, !1), t.addEventListener("webglcontextrestored", ue, !1), t.addEventListener("webglcontextcreationerror", me, !1), C === null) {
        const I = "webgl2";
        if (C = st(I, S), C === null)
          throw st(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Ce, Pe, Ee, Be, Re, A, M, N, X, J, q, Te, le, be, qe, te, xe, Fe, ke, Me, We, Oe, tt, L;
    function pe() {
      Ce = new ud(C), Ce.init(), Oe = new $u(C, Ce), Pe = new rd(C, Ce, e, Oe), Ee = new qu(C), Pe.reverseDepthBuffer && Ee.buffers.depth.setReversed(!0), Be = new md(C), Re = new Iu(), A = new Ku(C, Ce, Ee, Re, Pe, Oe, Be), M = new ld(v), N = new dd(v), X = new Sl(C), tt = new sd(C, X), J = new fd(C, X, Be, tt), q = new _d(C, J, X, Be), ke = new gd(C, Pe, A), te = new od(Re), Te = new Lu(v, M, N, Ce, Pe, tt, te), le = new af(v, Re), be = new Nu(), qe = new zu(Ce), Fe = new id(v, M, N, Ee, q, h, l), xe = new ju(v, q, Pe), L = new rf(C, Be, Pe, Ee), Me = new ad(C, Ce, Be), We = new pd(C, Ce, Be), Be.programs = Te.programs, v.capabilities = Pe, v.extensions = Ce, v.properties = Re, v.renderLists = be, v.shadowMap = xe, v.state = Ee, v.info = Be;
    }
    pe();
    const W = new nf(v, C);
    this.xr = W, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Ce.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Ce.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return K;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (K = S, this.setSize(j, O, !1));
    }, this.getSize = function(S) {
      return S.set(j, O);
    }, this.setSize = function(S, I, F = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      j = S, O = I, t.width = Math.floor(S * K), t.height = Math.floor(I * K), F === !0 && (t.style.width = S + "px", t.style.height = I + "px"), this.setViewport(0, 0, S, I);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(j * K, O * K).floor();
    }, this.setDrawingBufferSize = function(S, I, F) {
      j = S, O = I, K = F, t.width = Math.floor(S * F), t.height = Math.floor(I * F), this.setViewport(0, 0, S, I);
    }, this.getCurrentViewport = function(S) {
      return S.copy(b);
    }, this.getViewport = function(S) {
      return S.copy(ce);
    }, this.setViewport = function(S, I, F, k) {
      S.isVector4 ? ce.set(S.x, S.y, S.z, S.w) : ce.set(S, I, F, k), Ee.viewport(b.copy(ce).multiplyScalar(K).round());
    }, this.getScissor = function(S) {
      return S.copy(ge);
    }, this.setScissor = function(S, I, F, k) {
      S.isVector4 ? ge.set(S.x, S.y, S.z, S.w) : ge.set(S, I, F, k), Ee.scissor(y.copy(ge).multiplyScalar(K).round());
    }, this.getScissorTest = function() {
      return Ne;
    }, this.setScissorTest = function(S) {
      Ee.setScissorTest(Ne = S);
    }, this.setOpaqueSort = function(S) {
      z = S;
    }, this.setTransparentSort = function(S) {
      ie = S;
    }, this.getClearColor = function(S) {
      return S.copy(Fe.getClearColor());
    }, this.setClearColor = function() {
      Fe.setClearColor.apply(Fe, arguments);
    }, this.getClearAlpha = function() {
      return Fe.getClearAlpha();
    }, this.setClearAlpha = function() {
      Fe.setClearAlpha.apply(Fe, arguments);
    }, this.clear = function(S = !0, I = !0, F = !0) {
      let k = 0;
      if (S) {
        let U = !1;
        if (w !== null) {
          const ne = w.texture.format;
          U = ne === 1033 || ne === 1031 || ne === 1029;
        }
        if (U) {
          const ne = w.texture.type, fe = ne === 1009 || ne === 1014 || ne === 1012 || ne === 1020 || ne === 1017 || ne === 1018, Se = Fe.getClearColor(), ye = Fe.getClearAlpha(), Ie = Se.r, Ue = Se.g, Ae = Se.b;
          fe ? (f[0] = Ie, f[1] = Ue, f[2] = Ae, f[3] = ye, C.clearBufferuiv(C.COLOR, 0, f)) : (g[0] = Ie, g[1] = Ue, g[2] = Ae, g[3] = ye, C.clearBufferiv(C.COLOR, 0, g));
        } else
          k |= C.COLOR_BUFFER_BIT;
      }
      I && (k |= C.DEPTH_BUFFER_BIT, C.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), F && (k |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(k);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", $, !1), t.removeEventListener("webglcontextrestored", ue, !1), t.removeEventListener("webglcontextcreationerror", me, !1), be.dispose(), qe.dispose(), Re.dispose(), M.dispose(), N.dispose(), q.dispose(), tt.dispose(), L.dispose(), Te.dispose(), W.dispose(), W.removeEventListener("sessionstart", Ca), W.removeEventListener("sessionend", Ra), Tn.stop();
    };
    function $(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function ue() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const S = Be.autoReset, I = xe.enabled, F = xe.autoUpdate, k = xe.needsUpdate, U = xe.type;
      pe(), Be.autoReset = S, xe.enabled = I, xe.autoUpdate = F, xe.needsUpdate = k, xe.type = U;
    }
    function me(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function je(S) {
      const I = S.target;
      I.removeEventListener("dispose", je), ct(I);
    }
    function ct(S) {
      wt(S), Re.remove(S);
    }
    function wt(S) {
      const I = Re.get(S).programs;
      I !== void 0 && (I.forEach(function(F) {
        Te.releaseProgram(F);
      }), S.isShaderMaterial && Te.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, I, F, k, U, ne) {
      I === null && (I = he);
      const fe = U.isMesh && U.matrixWorld.determinant() < 0, Se = Co(S, I, F, k, U);
      Ee.setMaterial(k, fe);
      let ye = F.index, Ie = 1;
      if (k.wireframe === !0) {
        if (ye = J.getWireframeAttribute(F), ye === void 0) return;
        Ie = 2;
      }
      const Ue = F.drawRange, Ae = F.attributes.position;
      let Qe = Ue.start * Ie, it = (Ue.start + Ue.count) * Ie;
      ne !== null && (Qe = Math.max(Qe, ne.start * Ie), it = Math.min(it, (ne.start + ne.count) * Ie)), ye !== null ? (Qe = Math.max(Qe, 0), it = Math.min(it, ye.count)) : Ae != null && (Qe = Math.max(Qe, 0), it = Math.min(it, Ae.count));
      const rt = it - Qe;
      if (rt < 0 || rt === 1 / 0) return;
      tt.setup(U, k, Se, F, ye);
      let Pt, $e = Me;
      if (ye !== null && (Pt = X.get(ye), $e = We, $e.setIndex(Pt)), U.isMesh)
        k.wireframe === !0 ? (Ee.setLineWidth(k.wireframeLinewidth * ve()), $e.setMode(C.LINES)) : $e.setMode(C.TRIANGLES);
      else if (U.isLine) {
        let we = k.linewidth;
        we === void 0 && (we = 1), Ee.setLineWidth(we * ve()), U.isLineSegments ? $e.setMode(C.LINES) : U.isLineLoop ? $e.setMode(C.LINE_LOOP) : $e.setMode(C.LINE_STRIP);
      } else U.isPoints ? $e.setMode(C.POINTS) : U.isSprite && $e.setMode(C.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          $e.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (Ce.get("WEBGL_multi_draw"))
          $e.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const we = U._multiDrawStarts, _t = U._multiDrawCounts, Ze = U._multiDrawCount, Ot = ye ? X.get(ye).bytesPerElement : 1, Fn = Re.get(k).currentProgram.getUniforms();
          for (let Dt = 0; Dt < Ze; Dt++)
            Fn.setValue(C, "_gl_DrawID", Dt), $e.render(we[Dt] / Ot, _t[Dt]);
        }
      else if (U.isInstancedMesh)
        $e.renderInstances(Qe, rt, U.count);
      else if (F.isInstancedBufferGeometry) {
        const we = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, _t = Math.min(F.instanceCount, we);
        $e.renderInstances(Qe, rt, _t);
      } else
        $e.render(Qe, rt);
    };
    function Ke(S, I, F) {
      S.transparent === !0 && S.side === 2 && S.forceSinglePass === !1 ? (S.side = 1, S.needsUpdate = !0, Li(S, I, F), S.side = 0, S.needsUpdate = !0, Li(S, I, F), S.side = 2) : Li(S, I, F);
    }
    this.compile = function(S, I, F = null) {
      F === null && (F = S), p = qe.get(F), p.init(I), x.push(p), F.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), S !== F && S.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), p.setupLights();
      const k = /* @__PURE__ */ new Set();
      return S.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const ne = U.material;
        if (ne)
          if (Array.isArray(ne))
            for (let fe = 0; fe < ne.length; fe++) {
              const Se = ne[fe];
              Ke(Se, F, U), k.add(Se);
            }
          else
            Ke(ne, F, U), k.add(ne);
      }), x.pop(), p = null, k;
    }, this.compileAsync = function(S, I, F = null) {
      const k = this.compile(S, I, F);
      return new Promise((U) => {
        function ne() {
          if (k.forEach(function(fe) {
            Re.get(fe).currentProgram.isReady() && k.delete(fe);
          }), k.size === 0) {
            U(S);
            return;
          }
          setTimeout(ne, 10);
        }
        Ce.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
      });
    };
    let Ct = null;
    function tn(S) {
      Ct && Ct(S);
    }
    function Ca() {
      Tn.stop();
    }
    function Ra() {
      Tn.start();
    }
    const Tn = new oo();
    Tn.setAnimationLoop(tn), typeof self < "u" && Tn.setContext(self), this.setAnimationLoop = function(S) {
      Ct = S, W.setAnimationLoop(S), S === null ? Tn.stop() : Tn.start();
    }, W.addEventListener("sessionstart", Ca), W.addEventListener("sessionend", Ra), this.render = function(S, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0) return;
      if (S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(I), I = W.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, I, w), p = qe.get(S, x.length), p.init(I), x.push(p), ae.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), se.setFromProjectionMatrix(ae), Z = this.localClippingEnabled, H = te.init(this.clippingPlanes, Z), _ = be.get(S, m.length), _.init(), m.push(_), W.enabled === !0 && W.isPresenting === !0) {
        const ne = v.xr.getDepthSensingMesh();
        ne !== null && vs(ne, I, -1 / 0, v.sortObjects);
      }
      vs(S, I, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(z, ie), de = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, de && Fe.addToRenderList(_, S), this.info.render.frame++, H === !0 && te.beginShadows();
      const F = p.state.shadowsArray;
      xe.render(F, S, I), H === !0 && te.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const k = _.opaque, U = _.transmissive;
      if (p.setupLights(), I.isArrayCamera) {
        const ne = I.cameras;
        if (U.length > 0)
          for (let fe = 0, Se = ne.length; fe < Se; fe++) {
            const ye = ne[fe];
            Da(k, U, S, ye);
          }
        de && Fe.render(S);
        for (let fe = 0, Se = ne.length; fe < Se; fe++) {
          const ye = ne[fe];
          Pa(_, S, ye, ye.viewport);
        }
      } else
        U.length > 0 && Da(k, U, S, I), de && Fe.render(S), Pa(_, S, I);
      w !== null && (A.updateMultisampleRenderTarget(w), A.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(v, S, I), tt.resetDefaultState(), D = -1, Y = null, x.pop(), x.length > 0 ? (p = x[x.length - 1], H === !0 && te.setGlobalState(v.clippingPlanes, p.state.camera)) : p = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null;
    };
    function vs(S, I, F, k) {
      if (S.visible === !1) return;
      if (S.layers.test(I.layers)) {
        if (S.isGroup)
          F = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(I);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || se.intersectsSprite(S)) {
            k && ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ae);
            const fe = q.update(S), Se = S.material;
            Se.visible && _.push(S, fe, Se, F, ee.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || se.intersectsObject(S))) {
          const fe = q.update(S), Se = S.material;
          if (k && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), ee.copy(S.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), ee.copy(fe.boundingSphere.center)), ee.applyMatrix4(S.matrixWorld).applyMatrix4(ae)), Array.isArray(Se)) {
            const ye = fe.groups;
            for (let Ie = 0, Ue = ye.length; Ie < Ue; Ie++) {
              const Ae = ye[Ie], Qe = Se[Ae.materialIndex];
              Qe && Qe.visible && _.push(S, fe, Qe, F, ee.z, Ae);
            }
          } else Se.visible && _.push(S, fe, Se, F, ee.z, null);
        }
      }
      const ne = S.children;
      for (let fe = 0, Se = ne.length; fe < Se; fe++)
        vs(ne[fe], I, F, k);
    }
    function Pa(S, I, F, k) {
      const U = S.opaque, ne = S.transmissive, fe = S.transparent;
      p.setupLightsView(F), H === !0 && te.setGlobalState(v.clippingPlanes, F), k && Ee.viewport(b.copy(k)), U.length > 0 && Di(U, I, F), ne.length > 0 && Di(ne, I, F), fe.length > 0 && Di(fe, I, F), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function Da(S, I, F, k) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[k.id] === void 0 && (p.state.transmissionRenderTarget[k.id] = new Rt(1, 1, {
        generateMipmaps: !0,
        type: Ce.has("EXT_color_buffer_half_float") || Ce.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Xe.workingColorSpace
      }));
      const ne = p.state.transmissionRenderTarget[k.id], fe = k.viewport || b;
      ne.setSize(fe.z, fe.w);
      const Se = v.getRenderTarget();
      v.setRenderTarget(ne), v.getClearColor(G), V = v.getClearAlpha(), V < 1 && v.setClearColor(16777215, 0.5), v.clear(), de && Fe.render(F);
      const ye = v.toneMapping;
      v.toneMapping = 0;
      const Ie = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), p.setupLightsView(k), H === !0 && te.setGlobalState(v.clippingPlanes, k), Di(S, F, k), A.updateMultisampleRenderTarget(ne), A.updateRenderTargetMipmap(ne), Ce.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ue = !1;
        for (let Ae = 0, Qe = I.length; Ae < Qe; Ae++) {
          const it = I[Ae], rt = it.object, Pt = it.geometry, $e = it.material, we = it.group;
          if ($e.side === 2 && rt.layers.test(k.layers)) {
            const _t = $e.side;
            $e.side = 1, $e.needsUpdate = !0, La(rt, F, k, Pt, $e, we), $e.side = _t, $e.needsUpdate = !0, Ue = !0;
          }
        }
        Ue === !0 && (A.updateMultisampleRenderTarget(ne), A.updateRenderTargetMipmap(ne));
      }
      v.setRenderTarget(Se), v.setClearColor(G, V), Ie !== void 0 && (k.viewport = Ie), v.toneMapping = ye;
    }
    function Di(S, I, F) {
      const k = I.isScene === !0 ? I.overrideMaterial : null;
      for (let U = 0, ne = S.length; U < ne; U++) {
        const fe = S[U], Se = fe.object, ye = fe.geometry, Ie = k === null ? fe.material : k, Ue = fe.group;
        Se.layers.test(F.layers) && La(Se, I, F, ye, Ie, Ue);
      }
    }
    function La(S, I, F, k, U, ne) {
      S.onBeforeRender(v, I, F, k, U, ne), S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), U.onBeforeRender(v, I, F, k, S, ne), U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1 ? (U.side = 1, U.needsUpdate = !0, v.renderBufferDirect(F, I, k, U, S, ne), U.side = 0, U.needsUpdate = !0, v.renderBufferDirect(F, I, k, U, S, ne), U.side = 2) : v.renderBufferDirect(F, I, k, U, S, ne), S.onAfterRender(v, I, F, k, U, ne);
    }
    function Li(S, I, F) {
      I.isScene !== !0 && (I = he);
      const k = Re.get(S), U = p.state.lights, ne = p.state.shadowsArray, fe = U.state.version, Se = Te.getParameters(S, U.state, ne, I, F), ye = Te.getProgramCacheKey(Se);
      let Ie = k.programs;
      k.environment = S.isMeshStandardMaterial ? I.environment : null, k.fog = I.fog, k.envMap = (S.isMeshStandardMaterial ? N : M).get(S.envMap || k.environment), k.envMapRotation = k.environment !== null && S.envMap === null ? I.environmentRotation : S.envMapRotation, Ie === void 0 && (S.addEventListener("dispose", je), Ie = /* @__PURE__ */ new Map(), k.programs = Ie);
      let Ue = Ie.get(ye);
      if (Ue !== void 0) {
        if (k.currentProgram === Ue && k.lightsStateVersion === fe)
          return Ua(S, Se), Ue;
      } else
        Se.uniforms = Te.getUniforms(S), S.onBeforeCompile(Se, v), Ue = Te.acquireProgram(Se, ye), Ie.set(ye, Ue), k.uniforms = Se.uniforms;
      const Ae = k.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ae.clippingPlanes = te.uniform), Ua(S, Se), k.needsLights = Po(S), k.lightsStateVersion = fe, k.needsLights && (Ae.ambientLightColor.value = U.state.ambient, Ae.lightProbe.value = U.state.probe, Ae.directionalLights.value = U.state.directional, Ae.directionalLightShadows.value = U.state.directionalShadow, Ae.spotLights.value = U.state.spot, Ae.spotLightShadows.value = U.state.spotShadow, Ae.rectAreaLights.value = U.state.rectArea, Ae.ltc_1.value = U.state.rectAreaLTC1, Ae.ltc_2.value = U.state.rectAreaLTC2, Ae.pointLights.value = U.state.point, Ae.pointLightShadows.value = U.state.pointShadow, Ae.hemisphereLights.value = U.state.hemi, Ae.directionalShadowMap.value = U.state.directionalShadowMap, Ae.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Ae.spotShadowMap.value = U.state.spotShadowMap, Ae.spotLightMatrix.value = U.state.spotLightMatrix, Ae.spotLightMap.value = U.state.spotLightMap, Ae.pointShadowMap.value = U.state.pointShadowMap, Ae.pointShadowMatrix.value = U.state.pointShadowMatrix), k.currentProgram = Ue, k.uniformsList = null, Ue;
    }
    function Ia(S) {
      if (S.uniformsList === null) {
        const I = S.currentProgram.getUniforms();
        S.uniformsList = os.seqWithValue(I.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Ua(S, I) {
      const F = Re.get(S);
      F.outputColorSpace = I.outputColorSpace, F.batching = I.batching, F.batchingColor = I.batchingColor, F.instancing = I.instancing, F.instancingColor = I.instancingColor, F.instancingMorph = I.instancingMorph, F.skinning = I.skinning, F.morphTargets = I.morphTargets, F.morphNormals = I.morphNormals, F.morphColors = I.morphColors, F.morphTargetsCount = I.morphTargetsCount, F.numClippingPlanes = I.numClippingPlanes, F.numIntersection = I.numClipIntersection, F.vertexAlphas = I.vertexAlphas, F.vertexTangents = I.vertexTangents, F.toneMapping = I.toneMapping;
    }
    function Co(S, I, F, k, U) {
      I.isScene !== !0 && (I = he), A.resetTextureUnits();
      const ne = I.fog, fe = k.isMeshStandardMaterial ? I.environment : null, Se = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : dt, ye = (k.isMeshStandardMaterial ? N : M).get(k.envMap || fe), Ie = k.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Ue = !!F.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Ae = !!F.morphAttributes.position, Qe = !!F.morphAttributes.normal, it = !!F.morphAttributes.color;
      let rt = 0;
      k.toneMapped && (w === null || w.isXRRenderTarget === !0) && (rt = v.toneMapping);
      const Pt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, $e = Pt !== void 0 ? Pt.length : 0, we = Re.get(k), _t = p.state.lights;
      if (H === !0 && (Z === !0 || S !== Y)) {
        const Nt = S === Y && k.id === D;
        te.setState(k, S, Nt);
      }
      let Ze = !1;
      k.version === we.__version ? (we.needsLights && we.lightsStateVersion !== _t.state.version || we.outputColorSpace !== Se || U.isBatchedMesh && we.batching === !1 || !U.isBatchedMesh && we.batching === !0 || U.isBatchedMesh && we.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && we.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && we.instancing === !1 || !U.isInstancedMesh && we.instancing === !0 || U.isSkinnedMesh && we.skinning === !1 || !U.isSkinnedMesh && we.skinning === !0 || U.isInstancedMesh && we.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && we.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && we.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && we.instancingMorph === !1 && U.morphTexture !== null || we.envMap !== ye || k.fog === !0 && we.fog !== ne || we.numClippingPlanes !== void 0 && (we.numClippingPlanes !== te.numPlanes || we.numIntersection !== te.numIntersection) || we.vertexAlphas !== Ie || we.vertexTangents !== Ue || we.morphTargets !== Ae || we.morphNormals !== Qe || we.morphColors !== it || we.toneMapping !== rt || we.morphTargetsCount !== $e) && (Ze = !0) : (Ze = !0, we.__version = k.version);
      let Ot = we.currentProgram;
      Ze === !0 && (Ot = Li(k, I, U));
      let Fn = !1, Dt = !1, xs = !1;
      const ot = Ot.getUniforms(), fn = we.uniforms;
      if (Ee.useProgram(Ot.program) && (Fn = !0, Dt = !0, xs = !0), k.id !== D && (D = k.id, Dt = !0), Fn || Y !== S) {
        Pe.reverseDepthBuffer ? (_e.copy(S.projectionMatrix), Zo(_e), Jo(_e), ot.setValue(C, "projectionMatrix", _e)) : ot.setValue(C, "projectionMatrix", S.projectionMatrix), ot.setValue(C, "viewMatrix", S.matrixWorldInverse);
        const Nt = ot.map.cameraPosition;
        Nt !== void 0 && Nt.setValue(C, Q.setFromMatrixPosition(S.matrixWorld)), Pe.logarithmicDepthBuffer && ot.setValue(
          C,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && ot.setValue(C, "isOrthographic", S.isOrthographicCamera === !0), Y !== S && (Y = S, Dt = !0, xs = !0);
      }
      if (U.isSkinnedMesh) {
        ot.setOptional(C, U, "bindMatrix"), ot.setOptional(C, U, "bindMatrixInverse");
        const Nt = U.skeleton;
        Nt && (Nt.boneTexture === null && Nt.computeBoneTexture(), ot.setValue(C, "boneTexture", Nt.boneTexture, A));
      }
      U.isBatchedMesh && (ot.setOptional(C, U, "batchingTexture"), ot.setValue(C, "batchingTexture", U._matricesTexture, A), ot.setOptional(C, U, "batchingIdTexture"), ot.setValue(C, "batchingIdTexture", U._indirectTexture, A), ot.setOptional(C, U, "batchingColorTexture"), U._colorsTexture !== null && ot.setValue(C, "batchingColorTexture", U._colorsTexture, A));
      const Ms = F.morphAttributes;
      if ((Ms.position !== void 0 || Ms.normal !== void 0 || Ms.color !== void 0) && ke.update(U, F, Ot), (Dt || we.receiveShadow !== U.receiveShadow) && (we.receiveShadow = U.receiveShadow, ot.setValue(C, "receiveShadow", U.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (fn.envMap.value = ye, fn.flipEnvMap.value = ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && I.environment !== null && (fn.envMapIntensity.value = I.environmentIntensity), Dt && (ot.setValue(C, "toneMappingExposure", v.toneMappingExposure), we.needsLights && Ro(fn, xs), ne && k.fog === !0 && le.refreshFogUniforms(fn, ne), le.refreshMaterialUniforms(fn, k, K, O, p.state.transmissionRenderTarget[S.id]), os.upload(C, Ia(we), fn, A)), k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (os.upload(C, Ia(we), fn, A), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && ot.setValue(C, "center", U.center), ot.setValue(C, "modelViewMatrix", U.modelViewMatrix), ot.setValue(C, "normalMatrix", U.normalMatrix), ot.setValue(C, "modelMatrix", U.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const Nt = k.uniformsGroups;
        for (let Ss = 0, Do = Nt.length; Ss < Do; Ss++) {
          const Na = Nt[Ss];
          L.update(Na, Ot), L.bind(Na, Ot);
        }
      }
      return Ot;
    }
    function Ro(S, I) {
      S.ambientLightColor.needsUpdate = I, S.lightProbe.needsUpdate = I, S.directionalLights.needsUpdate = I, S.directionalLightShadows.needsUpdate = I, S.pointLights.needsUpdate = I, S.pointLightShadows.needsUpdate = I, S.spotLights.needsUpdate = I, S.spotLightShadows.needsUpdate = I, S.rectAreaLights.needsUpdate = I, S.hemisphereLights.needsUpdate = I;
    }
    function Po(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return E;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(S, I, F) {
      Re.get(S.texture).__webglTexture = I, Re.get(S.depthTexture).__webglTexture = F;
      const k = Re.get(S);
      k.__hasExternalTextures = !0, k.__autoAllocateDepthBuffer = F === void 0, k.__autoAllocateDepthBuffer || Ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(S, I) {
      const F = Re.get(S);
      F.__webglFramebuffer = I, F.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(S, I = 0, F = 0) {
      w = S, E = I, R = F;
      let k = !0, U = null, ne = !1, fe = !1;
      if (S) {
        const ye = Re.get(S);
        if (ye.__useDefaultFramebuffer !== void 0)
          Ee.bindFramebuffer(C.FRAMEBUFFER, null), k = !1;
        else if (ye.__webglFramebuffer === void 0)
          A.setupRenderTarget(S);
        else if (ye.__hasExternalTextures)
          A.rebindTextures(S, Re.get(S.texture).__webglTexture, Re.get(S.depthTexture).__webglTexture);
        else if (S.depthBuffer) {
          const Ae = S.depthTexture;
          if (ye.__boundDepthTexture !== Ae) {
            if (Ae !== null && Re.has(Ae) && (S.width !== Ae.image.width || S.height !== Ae.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            A.setupDepthRenderbuffer(S);
          }
        }
        const Ie = S.texture;
        (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (fe = !0);
        const Ue = Re.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ue[I]) ? U = Ue[I][F] : U = Ue[I], ne = !0) : S.samples > 0 && A.useMultisampledRTT(S) === !1 ? U = Re.get(S).__webglMultisampledFramebuffer : Array.isArray(Ue) ? U = Ue[F] : U = Ue, b.copy(S.viewport), y.copy(S.scissor), B = S.scissorTest;
      } else
        b.copy(ce).multiplyScalar(K).floor(), y.copy(ge).multiplyScalar(K).floor(), B = Ne;
      if (Ee.bindFramebuffer(C.FRAMEBUFFER, U) && k && Ee.drawBuffers(S, U), Ee.viewport(b), Ee.scissor(y), Ee.setScissorTest(B), ne) {
        const ye = Re.get(S.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + I, ye.__webglTexture, F);
      } else if (fe) {
        const ye = Re.get(S.texture), Ie = I || 0;
        C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, ye.__webglTexture, F || 0, Ie);
      }
      D = -1;
    }, this.readRenderTargetPixels = function(S, I, F, k, U, ne, fe) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Se = Re.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && fe !== void 0 && (Se = Se[fe]), Se) {
        Ee.bindFramebuffer(C.FRAMEBUFFER, Se);
        try {
          const ye = S.texture, Ie = ye.format, Ue = ye.type;
          if (!Pe.textureFormatReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Pe.textureTypeReadable(Ue)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= S.width - k && F >= 0 && F <= S.height - U && C.readPixels(I, F, k, U, Oe.convert(Ie), Oe.convert(Ue), ne);
        } finally {
          const ye = w !== null ? Re.get(w).__webglFramebuffer : null;
          Ee.bindFramebuffer(C.FRAMEBUFFER, ye);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(S, I, F, k, U, ne, fe) {
      if (!(S && S.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Se = Re.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && fe !== void 0 && (Se = Se[fe]), Se) {
        const ye = S.texture, Ie = ye.format, Ue = ye.type;
        if (!Pe.textureFormatReadable(Ie))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Pe.textureTypeReadable(Ue))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (I >= 0 && I <= S.width - k && F >= 0 && F <= S.height - U) {
          Ee.bindFramebuffer(C.FRAMEBUFFER, Se);
          const Ae = C.createBuffer();
          C.bindBuffer(C.PIXEL_PACK_BUFFER, Ae), C.bufferData(C.PIXEL_PACK_BUFFER, ne.byteLength, C.STREAM_READ), C.readPixels(I, F, k, U, Oe.convert(Ie), Oe.convert(Ue), 0);
          const Qe = w !== null ? Re.get(w).__webglFramebuffer : null;
          Ee.bindFramebuffer(C.FRAMEBUFFER, Qe);
          const it = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return C.flush(), await $o(C, it, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, Ae), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, ne), C.deleteBuffer(Ae), C.deleteSync(it), ne;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(S, I = null, F = 0) {
      S.isTexture !== !0 && (rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, S = arguments[1]);
      const k = Math.pow(2, -F), U = Math.floor(S.image.width * k), ne = Math.floor(S.image.height * k), fe = I !== null ? I.x : 0, Se = I !== null ? I.y : 0;
      A.setTexture2D(S, 0), C.copyTexSubImage2D(C.TEXTURE_2D, F, 0, 0, fe, Se, U, ne), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(S, I, F = null, k = null, U = 0) {
      S.isTexture !== !0 && (rs("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, S = arguments[1], I = arguments[2], U = arguments[3] || 0, F = null);
      let ne, fe, Se, ye, Ie, Ue;
      F !== null ? (ne = F.max.x - F.min.x, fe = F.max.y - F.min.y, Se = F.min.x, ye = F.min.y) : (ne = S.image.width, fe = S.image.height, Se = 0, ye = 0), k !== null ? (Ie = k.x, Ue = k.y) : (Ie = 0, Ue = 0);
      const Ae = Oe.convert(I.format), Qe = Oe.convert(I.type);
      A.setTexture2D(I, 0), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
      const it = C.getParameter(C.UNPACK_ROW_LENGTH), rt = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Pt = C.getParameter(C.UNPACK_SKIP_PIXELS), $e = C.getParameter(C.UNPACK_SKIP_ROWS), we = C.getParameter(C.UNPACK_SKIP_IMAGES), _t = S.isCompressedTexture ? S.mipmaps[U] : S.image;
      C.pixelStorei(C.UNPACK_ROW_LENGTH, _t.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, _t.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Se), C.pixelStorei(C.UNPACK_SKIP_ROWS, ye), S.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, U, Ie, Ue, ne, fe, Ae, Qe, _t.data) : S.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, U, Ie, Ue, _t.width, _t.height, Ae, _t.data) : C.texSubImage2D(C.TEXTURE_2D, U, Ie, Ue, ne, fe, Ae, Qe, _t), C.pixelStorei(C.UNPACK_ROW_LENGTH, it), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, rt), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Pt), C.pixelStorei(C.UNPACK_SKIP_ROWS, $e), C.pixelStorei(C.UNPACK_SKIP_IMAGES, we), U === 0 && I.generateMipmaps && C.generateMipmap(C.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, I, F = null, k = null, U = 0) {
      S.isTexture !== !0 && (rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, k = arguments[1] || null, S = arguments[2], I = arguments[3], U = arguments[4] || 0);
      let ne, fe, Se, ye, Ie, Ue, Ae, Qe, it;
      const rt = S.isCompressedTexture ? S.mipmaps[U] : S.image;
      F !== null ? (ne = F.max.x - F.min.x, fe = F.max.y - F.min.y, Se = F.max.z - F.min.z, ye = F.min.x, Ie = F.min.y, Ue = F.min.z) : (ne = rt.width, fe = rt.height, Se = rt.depth, ye = 0, Ie = 0, Ue = 0), k !== null ? (Ae = k.x, Qe = k.y, it = k.z) : (Ae = 0, Qe = 0, it = 0);
      const Pt = Oe.convert(I.format), $e = Oe.convert(I.type);
      let we;
      if (I.isData3DTexture)
        A.setTexture3D(I, 0), we = C.TEXTURE_3D;
      else if (I.isDataArrayTexture || I.isCompressedArrayTexture)
        A.setTexture2DArray(I, 0), we = C.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
      const _t = C.getParameter(C.UNPACK_ROW_LENGTH), Ze = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Ot = C.getParameter(C.UNPACK_SKIP_PIXELS), Fn = C.getParameter(C.UNPACK_SKIP_ROWS), Dt = C.getParameter(C.UNPACK_SKIP_IMAGES);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, rt.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, rt.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, ye), C.pixelStorei(C.UNPACK_SKIP_ROWS, Ie), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Ue), S.isDataTexture || S.isData3DTexture ? C.texSubImage3D(we, U, Ae, Qe, it, ne, fe, Se, Pt, $e, rt.data) : I.isCompressedArrayTexture ? C.compressedTexSubImage3D(we, U, Ae, Qe, it, ne, fe, Se, Pt, rt.data) : C.texSubImage3D(we, U, Ae, Qe, it, ne, fe, Se, Pt, $e, rt), C.pixelStorei(C.UNPACK_ROW_LENGTH, _t), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Ze), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ot), C.pixelStorei(C.UNPACK_SKIP_ROWS, Fn), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Dt), U === 0 && I.generateMipmaps && C.generateMipmap(we), Ee.unbindTexture();
    }, this.initRenderTarget = function(S) {
      Re.get(S).__webglFramebuffer === void 0 && A.setupRenderTarget(S);
    }, this.initTexture = function(S) {
      S.isCubeTexture ? A.setTextureCube(S, 0) : S.isData3DTexture ? A.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? A.setTexture2DArray(S, 0) : A.setTexture2D(S, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      E = 0, R = 0, w = null, Ee.reset(), tt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === ba ? "display-p3" : "srgb", t.unpackColorSpace = Xe.workingColorSpace === fs ? "display-p3" : "srgb";
  }
}
class Zs extends at {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Kt(), this.environmentIntensity = 1, this.environmentRotation = new Kt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class lf {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = Xt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Xt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Xt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Tt = /* @__PURE__ */ new P();
class Sa {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyMatrix4(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyNormalMatrix(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.transformDirection(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Wt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Wt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), s = et(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new Et(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Sa(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Ar = /* @__PURE__ */ new P(), Er = /* @__PURE__ */ new Ve(), wr = /* @__PURE__ */ new Ve(), cf = /* @__PURE__ */ new P(), Cr = /* @__PURE__ */ new Le(), Qi = /* @__PURE__ */ new P(), Js = /* @__PURE__ */ new Jt(), Rr = /* @__PURE__ */ new Le(), Qs = /* @__PURE__ */ new ps();
class hf extends bt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Fa, this.bindMatrix = new Le(), this.bindMatrixInverse = new Le(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new un()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Qi), this.boundingBox.expandByPoint(Qi);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Jt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Qi), this.boundingSphere.expandByPoint(Qi);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Js.copy(this.boundingSphere), Js.applyMatrix4(i), e.ray.intersectsSphere(Js) !== !1 && (Rr.copy(i).invert(), Qs.copy(e.ray).applyMatrix4(Rr), !(this.boundingBox !== null && Qs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Qs)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ve(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Fa ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Lo ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Er.fromBufferAttribute(i.attributes.skinIndex, e), wr.fromBufferAttribute(i.attributes.skinWeight, e), Ar.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const r = wr.getComponent(s);
      if (r !== 0) {
        const o = Er.getComponent(s);
        Cr.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(cf.copy(Ar).applyMatrix4(Cr), r);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class mo extends at {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class gs extends gt {
  constructor(e = null, t = 1, n = 1, i, s, r, o, l, c = 1003, d = 1003, u, h) {
    super(null, r, o, l, c, d, i, s, u, h), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Pr = /* @__PURE__ */ new Le(), df = /* @__PURE__ */ new Le();
class _s {
  constructor(e = [], t = []) {
    this.uuid = Xt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Le());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Le();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s] ? e[s].matrixWorld : df;
      Pr.multiplyMatrices(o, t[s]), Pr.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new _s(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new gs(t, e, e, 1023, 1015);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let r = t[s];
      r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), r = new mo()), this.bones.push(r), this.boneInverses.push(new Le().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class la extends Et {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const $n = /* @__PURE__ */ new Le(), Dr = /* @__PURE__ */ new Le(), es = [], Lr = /* @__PURE__ */ new un(), uf = /* @__PURE__ */ new Le(), _i = /* @__PURE__ */ new bt(), bi = /* @__PURE__ */ new Jt();
class ff extends bt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new la(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, uf);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new un()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, $n), Lr.copy(e.boundingBox).applyMatrix4($n), this.boundingBox.union(Lr);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Jt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, $n), bi.copy(e.boundingSphere).applyMatrix4($n), this.boundingSphere.union(bi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, r = e * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[r + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (_i.geometry = this.geometry, _i.material = this.material, _i.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), bi.copy(this.boundingSphere), bi.applyMatrix4(n), e.ray.intersectsSphere(bi) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, $n), Dr.multiplyMatrices(n, $n), _i.matrixWorld = Dr, _i.raycast(e, es);
        for (let r = 0, o = es.length; r < o; r++) {
          const l = es[r];
          l.instanceId = s, l.object = this, t.push(l);
        }
        es.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new la(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new gs(new Float32Array(i * this.count), i, this.count, 1028, 1015));
    const s = this.morphTexture.source.data.data;
    let r = 0;
    for (let c = 0; c < n.length; c++)
      r += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - r, l = i * e;
    s[l] = o, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class go extends qt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new re(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const ds = /* @__PURE__ */ new P(), us = /* @__PURE__ */ new P(), Ir = /* @__PURE__ */ new Le(), vi = /* @__PURE__ */ new ps(), ts = /* @__PURE__ */ new Jt(), ea = /* @__PURE__ */ new P(), Ur = /* @__PURE__ */ new P();
class ya extends at {
  constructor(e = new $t(), t = new go()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        ds.fromBufferAttribute(t, i - 1), us.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += ds.distanceTo(us);
      e.setAttribute("lineDistance", new Yt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ts.copy(n.boundingSphere), ts.applyMatrix4(i), ts.radius += s, e.ray.intersectsSphere(ts) === !1) return;
    Ir.copy(i).invert(), vi.copy(e.ray).applyMatrix4(Ir);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, d = n.index, h = n.attributes.position;
    if (d !== null) {
      const f = Math.max(0, r.start), g = Math.min(d.count, r.start + r.count);
      for (let _ = f, p = g - 1; _ < p; _ += c) {
        const m = d.getX(_), x = d.getX(_ + 1), v = ns(this, e, vi, l, m, x);
        v && t.push(v);
      }
      if (this.isLineLoop) {
        const _ = d.getX(g - 1), p = d.getX(f), m = ns(this, e, vi, l, _, p);
        m && t.push(m);
      }
    } else {
      const f = Math.max(0, r.start), g = Math.min(h.count, r.start + r.count);
      for (let _ = f, p = g - 1; _ < p; _ += c) {
        const m = ns(this, e, vi, l, _, _ + 1);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const _ = ns(this, e, vi, l, g - 1, f);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ns(a, e, t, n, i, s) {
  const r = a.geometry.attributes.position;
  if (ds.fromBufferAttribute(r, i), us.fromBufferAttribute(r, s), t.distanceSqToSegment(ds, us, ea, Ur) > n) return;
  ea.applyMatrix4(a.matrixWorld);
  const l = e.ray.origin.distanceTo(ea);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Ur.clone().applyMatrix4(a.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    };
}
const Nr = /* @__PURE__ */ new P(), Fr = /* @__PURE__ */ new P();
class pf extends ya {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Nr.fromBufferAttribute(t, i), Fr.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Nr.distanceTo(Fr);
      e.setAttribute("lineDistance", new Yt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class mf extends ya {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class _o extends qt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new re(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const kr = /* @__PURE__ */ new Le(), ca = /* @__PURE__ */ new ps(), is = /* @__PURE__ */ new Jt(), ss = /* @__PURE__ */ new P();
class gf extends at {
  constructor(e = new $t(), t = new _o()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), is.copy(n.boundingSphere), is.applyMatrix4(i), is.radius += s, e.ray.intersectsSphere(is) === !1) return;
    kr.copy(i).invert(), ca.copy(e.ray).applyMatrix4(kr);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, r.start), f = Math.min(c.count, r.start + r.count);
      for (let g = h, _ = f; g < _; g++) {
        const p = c.getX(g);
        ss.fromBufferAttribute(u, p), Br(ss, p, l, i, e, t, this);
      }
    } else {
      const h = Math.max(0, r.start), f = Math.min(u.count, r.start + r.count);
      for (let g = h, _ = f; g < _; g++)
        ss.fromBufferAttribute(u, g), Br(ss, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Br(a, e, t, n, i, s, r) {
  const o = ca.distanceSqToPoint(a);
  if (o < t) {
    const l = new P();
    ca.closestPointToPoint(a, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    });
  }
}
class _f extends qt {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new re(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class bf extends vt {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class hn extends qt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new re(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new re(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new De(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Kt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Qt extends hn {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new De(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return St(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new re(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new re(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new re(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function as(a, e, t) {
  return !a || // let 'undefined' and 'null' pass
  !t && a.constructor === e ? a : typeof e.BYTES_PER_ELEMENT == "number" ? new e(a) : Array.prototype.slice.call(a);
}
function vf(a) {
  return ArrayBuffer.isView(a) && !(a instanceof DataView);
}
function xf(a) {
  function e(i, s) {
    return a[i] - a[s];
  }
  const t = a.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Or(a, e, t) {
  const n = a.length, i = new a.constructor(n);
  for (let s = 0, r = 0; r !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[r++] = a[o + l];
  }
  return i;
}
function bo(a, e, t, n) {
  let i = 1, s = a[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = a[i++];
  if (s === void 0) return;
  let r = s[n];
  if (r !== void 0)
    if (Array.isArray(r))
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push.apply(t, r)), s = a[i++];
      while (s !== void 0);
    else if (r.toArray !== void 0)
      do
        r = s[n], r !== void 0 && (e.push(s.time), r.toArray(t, t.length)), s = a[i++];
      while (s !== void 0);
    else
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push(r)), s = a[i++];
      while (s !== void 0);
}
class Pi {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let r;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break t;
            }
            r = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            r = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < r; ) {
          const o = n + r >>> 1;
          e < t[o] ? r = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let r = 0; r !== i; ++r)
      t[r] = n[s + r];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Mf extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, r = e + 1, o = i[s], l = i[r];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          s = e, o = 2 * t - n;
          break;
        case 2402:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          r = e, l = 2 * n - t;
          break;
        case 2402:
          r = 1, l = n + i[1] - i[0];
          break;
        default:
          r = e - 1, l = t;
      }
    const c = (n - t) * 0.5, d = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * d, this._offsetNext = r * d;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, d = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), _ = g * g, p = _ * g, m = -h * p + 2 * h * _ - h * g, x = (1 + h) * p + (-1.5 - 2 * h) * _ + (-0.5 + h) * g + 1, v = (-1 - f) * p + (1.5 + f) * _ + 0.5 * g, T = f * p - f * _;
    for (let E = 0; E !== o; ++E)
      s[E] = m * r[d + E] + x * r[c + E] + v * r[l + E] + T * r[u + E];
    return s;
  }
}
class vo extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, d = (n - t) / (i - t), u = 1 - d;
    for (let h = 0; h !== o; ++h)
      s[h] = r[c + h] * u + r[l + h] * d;
    return s;
  }
}
class Sf extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class en {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = as(t, this.TimeBufferType), this.values = as(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: as(e.times, Array),
        values: as(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Sf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new vo(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Mf(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, r = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; r !== -1 && n[r] > t; )
      --r;
    if (++r, s !== 0 || r !== i) {
      s >= r && (r = Math.max(r, 1), s = r - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, r), this.values = this.values.slice(s * o, r * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let r = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (r !== null && r > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, r), e = !1;
        break;
      }
      r = l;
    }
    if (i !== void 0 && vf(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1;
    let r = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], d = e[o + 1];
      if (c !== d && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = o * n, h = u - n, f = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[h + g] || _ !== t[f + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== r) {
          e[r] = e[o];
          const u = o * n, h = r * n;
          for (let f = 0; f !== n; ++f)
            t[h + f] = t[u + f];
        }
        ++r;
      }
    }
    if (s > 0) {
      e[r] = e[s];
      for (let o = s * n, l = r * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++r;
    }
    return r !== e.length ? (this.times = e.slice(0, r), this.values = t.slice(0, r * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
en.prototype.TimeBufferType = Float32Array;
en.prototype.ValueBufferType = Float32Array;
en.prototype.DefaultInterpolation = 2301;
class li extends en {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
li.prototype.ValueTypeName = "bool";
li.prototype.ValueBufferType = Array;
li.prototype.DefaultInterpolation = 2300;
li.prototype.InterpolantFactoryMethodLinear = void 0;
li.prototype.InterpolantFactoryMethodSmooth = void 0;
class xo extends en {
}
xo.prototype.ValueTypeName = "color";
class ii extends en {
}
ii.prototype.ValueTypeName = "number";
class yf extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let d = c + o; c !== d; c += 4)
      Ut.slerpFlat(s, 0, r, c - o, r, c, l);
    return s;
  }
}
class si extends en {
  InterpolantFactoryMethodLinear(e) {
    return new yf(this.times, this.values, this.getValueSize(), e);
  }
}
si.prototype.ValueTypeName = "quaternion";
si.prototype.InterpolantFactoryMethodSmooth = void 0;
class ci extends en {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ci.prototype.ValueTypeName = "string";
ci.prototype.ValueBufferType = Array;
ci.prototype.DefaultInterpolation = 2300;
ci.prototype.InterpolantFactoryMethodLinear = void 0;
ci.prototype.InterpolantFactoryMethodSmooth = void 0;
class ai extends en {
}
ai.prototype.ValueTypeName = "vector";
class ha {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Xt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let r = 0, o = n.length; r !== o; ++r)
      t.push(Af(n[r]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, r = n.length; s !== r; ++s)
      t.push(en.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, r = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const d = xf(l);
      l = Or(l, 1, d), c = Or(c, 1, d), !i && l[0] === 0 && (l.push(s), c.push(c[0])), r.push(
        new ii(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, r);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], d = c.name.match(s);
      if (d && d.length > 1) {
        const u = d[1];
        let h = i[u];
        h || (i[u] = h = []), h.push(c);
      }
    }
    const r = [];
    for (const o in i)
      r.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return r;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, h, f, g, _) {
      if (f.length !== 0) {
        const p = [], m = [];
        bo(f, p, m, g), p.length !== 0 && _.push(new u(h, p, m));
      }
    }, i = [], s = e.name || "default", r = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const h = c[u].keys;
      if (!(!h || h.length === 0))
        if (h[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < h.length; g++)
            if (h[g].morphTargets)
              for (let _ = 0; _ < h[g].morphTargets.length; _++)
                f[h[g].morphTargets[_]] = -1;
          for (const _ in f) {
            const p = [], m = [];
            for (let x = 0; x !== h[g].morphTargets.length; ++x) {
              const v = h[g];
              p.push(v.time), m.push(v.morphTarget === _ ? 1 : 0);
            }
            i.push(new ii(".morphTargetInfluence[" + _ + "]", p, m));
          }
          l = f.length * r;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            ai,
            f + ".position",
            h,
            "pos",
            i
          ), n(
            si,
            f + ".quaternion",
            h,
            "rot",
            i
          ), n(
            ai,
            f + ".scale",
            h,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Tf(a) {
  switch (a.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ii;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ai;
    case "color":
      return xo;
    case "quaternion":
      return si;
    case "bool":
    case "boolean":
      return li;
    case "string":
      return ci;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
}
function Af(a) {
  if (a.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Tf(a.type);
  if (a.times === void 0) {
    const t = [], n = [];
    bo(a.keys, t, n, "value"), a.times = t, a.values = n;
  }
  return e.parse !== void 0 ? e.parse(a) : new e(a.name, a.times, a.values, a.interpolation);
}
const yn = {
  enabled: !1,
  files: {},
  add: function(a, e) {
    this.enabled !== !1 && (this.files[a] = e);
  },
  get: function(a) {
    if (this.enabled !== !1)
      return this.files[a];
  },
  remove: function(a) {
    delete this.files[a];
  },
  clear: function() {
    this.files = {};
  }
};
class Ef {
  constructor(e, t, n) {
    const i = this;
    let s = !1, r = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(d) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(d, r, o), s = !0;
    }, this.itemEnd = function(d) {
      r++, i.onProgress !== void 0 && i.onProgress(d, r, o), r === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(d) {
      i.onError !== void 0 && i.onError(d);
    }, this.resolveURL = function(d) {
      return l ? l(d) : d;
    }, this.setURLModifier = function(d) {
      return l = d, this;
    }, this.addHandler = function(d, u) {
      return c.push(d, u), this;
    }, this.removeHandler = function(d) {
      const u = c.indexOf(d);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(d) {
      for (let u = 0, h = c.length; u < h; u += 2) {
        const f = c[u], g = c[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(d))
          return g;
      }
      return null;
    };
  }
}
const wf = /* @__PURE__ */ new Ef();
class hi {
  constructor(e) {
    this.manager = e !== void 0 ? e : wf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
hi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const ln = {};
class Cf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Mo extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = yn.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (ln[e] !== void 0) {
      ln[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    ln[e] = [], ln[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const r = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(r).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const d = ln[e], u = c.body.getReader(), h = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), f = h ? parseInt(h) : 0, g = f !== 0;
        let _ = 0;
        const p = new ReadableStream({
          start(m) {
            x();
            function x() {
              u.read().then(({ done: v, value: T }) => {
                if (v)
                  m.close();
                else {
                  _ += T.byteLength;
                  const E = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f });
                  for (let R = 0, w = d.length; R < w; R++) {
                    const D = d[R];
                    D.onProgress && D.onProgress(E);
                  }
                  m.enqueue(T), x();
                }
              }, (v) => {
                m.error(v);
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new Cf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((d) => new DOMParser().parseFromString(d, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), h = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(h);
            return c.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((c) => {
      yn.add(e, c);
      const d = ln[e];
      delete ln[e];
      for (let u = 0, h = d.length; u < h; u++) {
        const f = d[u];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const d = ln[e];
      if (d === void 0)
        throw this.manager.itemError(e), c;
      delete ln[e];
      for (let u = 0, h = d.length; u < h; u++) {
        const f = d[u];
        f.onError && f.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Rf extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = yn.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const o = Ei("img");
    function l() {
      d(), yn.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      d(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function d() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class da extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new gt(), r = new Rf(this.manager);
    return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class bs extends at {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new re(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const ta = /* @__PURE__ */ new Le(), Gr = /* @__PURE__ */ new P(), zr = /* @__PURE__ */ new P();
class Ta {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new De(512, 512), this.map = null, this.mapPass = null, this.matrix = new Le(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new xa(), this._frameExtents = new De(1, 1), this._viewportCount = 1, this._viewports = [
      new Ve(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Gr.setFromMatrixPosition(e.matrixWorld), t.position.copy(Gr), zr.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(zr), t.updateMatrixWorld(), ta.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ta), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(ta);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Pf extends Ta {
  constructor() {
    super(new yt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ei * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Df extends bs {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(at.DEFAULT_UP), this.updateMatrix(), this.target = new at(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = r, this.map = null, this.shadow = new Pf();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Hr = /* @__PURE__ */ new Le(), xi = /* @__PURE__ */ new P(), na = /* @__PURE__ */ new P();
class Lf extends Ta {
  constructor() {
    super(new yt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new De(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Ve(2, 1, 1, 1),
      // negative X
      new Ve(0, 1, 1, 1),
      // positive Z
      new Ve(3, 1, 1, 1),
      // negative Z
      new Ve(1, 1, 1, 1),
      // positive Y
      new Ve(3, 0, 1, 1),
      // negative Y
      new Ve(1, 0, 1, 1)
    ], this._cubeDirections = [
      new P(1, 0, 0),
      new P(-1, 0, 0),
      new P(0, 0, 1),
      new P(0, 0, -1),
      new P(0, 1, 0),
      new P(0, -1, 0)
    ], this._cubeUps = [
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 0, 1),
      new P(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), xi.setFromMatrixPosition(e.matrixWorld), n.position.copy(xi), na.copy(n.position), na.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(na), n.updateMatrixWorld(), i.makeTranslation(-xi.x, -xi.y, -xi.z), Hr.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Hr);
  }
}
class If extends bs {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Lf();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Uf extends Ta {
  constructor() {
    super(new Ri(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ua extends bs {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(at.DEFAULT_UP), this.updateMatrix(), this.target = new at(), this.shadow = new Uf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Nf extends bs {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Ai {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Ff extends hi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = yn.get(e);
    if (r !== void 0) {
      if (s.manager.itemStart(e), r.then) {
        r.then((c) => {
          t && t(c), s.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return yn.add(e, c), t && t(c), s.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), yn.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    yn.add(e, l), s.manager.itemStart(e);
  }
}
class So {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Vr(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Vr();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Vr() {
  return performance.now();
}
class kf {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, r;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, r = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, r = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, r = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = r, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let r = this.cumulativeWeight;
    if (r === 0) {
      for (let o = 0; o !== i; ++o)
        n[s + o] = n[o];
      r = t;
    } else {
      r += t;
      const o = t / r;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = r;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, r = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        l,
        1 - s,
        t
      );
    }
    r > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, r = i; s !== r; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let r = 0; r !== s; ++r)
        e[t + r] = e[n + r];
  }
  _slerp(e, t, n, i) {
    Ut.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const r = this._workIndex * s;
    Ut.multiplyQuaternionsFlat(e, r, e, t, e, n), Ut.slerpFlat(e, t, e, t, e, r, i);
  }
  _lerp(e, t, n, i, s) {
    const r = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const l = t + o;
      e[l] = e[l] * r + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let r = 0; r !== s; ++r) {
      const o = t + r;
      e[o] = e[o] + e[n + r] * i;
    }
  }
}
const Aa = "\\[\\]\\.:\\/", Bf = new RegExp("[" + Aa + "]", "g"), Ea = "[^" + Aa + "]", Of = "[^" + Aa.replace("\\.", "") + "]", Gf = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Ea), zf = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Of), Hf = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ea), Vf = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ea), Wf = new RegExp(
  "^" + Gf + zf + Hf + Vf + "$"
), jf = ["material", "materials", "bones", "map"];
class Xf {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Bf, "");
  }
  static parseTrackName(e) {
    const t = Wf.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      jf.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let r = 0; r < s.length; r++) {
          const o = s[r];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let d = 0; d < e.length; d++)
            if (e[d].name === c) {
              c = d;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const r = e[i];
    if (r === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s;
    } else r.fromArray !== void 0 && r.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (l = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = Xf;
Je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Je.prototype.GetterByBindingType = [
  Je.prototype._getValue_direct,
  Je.prototype._getValue_array,
  Je.prototype._getValue_arrayElement,
  Je.prototype._getValue_toArray
];
Je.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Je.prototype._setValue_direct,
    Je.prototype._setValue_direct_setNeedsUpdate,
    Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Je.prototype._setValue_array,
    Je.prototype._setValue_array_setNeedsUpdate,
    Je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Je.prototype._setValue_arrayElement,
    Je.prototype._setValue_arrayElement_setNeedsUpdate,
    Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Je.prototype._setValue_fromArray,
    Je.prototype._setValue_fromArray_setNeedsUpdate,
    Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class qf {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, r = s.length, o = new Array(r), l = {
      endingStart: 2400,
      endingEnd: 2400
    };
    for (let c = 0; c !== r; ++c) {
      const d = s[c].createInterpolant(null);
      o[c] = d, d.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, r = s / i, o = i / s;
      e.warp(1, r, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, r = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = s, l[1] = s + n, c[0] = e / r, c[1] = t / r, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (e - s) * n;
      l < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * l);
    }
    t *= this._updateTimeScale(e);
    const r = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case 2501:
          for (let d = 0, u = l.length; d !== u; ++d)
            l[d].evaluate(r), c[d].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let d = 0, u = l.length; d !== u; ++d)
            l[d].evaluate(r), c[d].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const r = n === 2202;
    if (e === 0)
      return s === -1 ? i : r && (s & 1) === 1 ? t - i : i;
    if (n === 2200) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, r)) : this._setEndings(this.repetitions === 0, !0, r)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, s += Math.abs(o);
        const l = this.repetitions - s;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, r);
          } else
            this._setEndings(!1, !1, r);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (r && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = 2401, i.endingEnd = 2401) : (e ? i.endingStart = this.zeroSlopeAtStart ? 2401 : 2400 : i.endingStart = 2402, t ? i.endingEnd = this.zeroSlopeAtEnd ? 2401 : 2400 : i.endingEnd = 2402);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let r = this._weightInterpolant;
    r === null && (r = i._lendControlInterpolant(), this._weightInterpolant = r);
    const o = r.parameterPositions, l = r.sampleValues;
    return o[0] = s, l[0] = t, o[1] = s + e, l[1] = n, this;
  }
}
const Yf = new Float32Array(1);
class Kf extends Nn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, r = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let d = c[l];
    d === void 0 && (d = {}, c[l] = d);
    for (let u = 0; u !== s; ++u) {
      const h = i[u], f = h.name;
      let g = d[f];
      if (g !== void 0)
        ++g.referenceCount, r[u] = g;
      else {
        if (g = r[u], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, f));
          continue;
        }
        const _ = t && t._propertyBindings[u].binding.parsedPath;
        g = new kf(
          Je.create(n, f, _),
          h.ValueTypeName,
          h.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, l, f), r[u] = g;
      }
      o[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let r = s[t];
    if (r === void 0)
      r = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = r;
    else {
      const o = r.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), r.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, r = this._actionsByClip, o = r[s], l = o.knownActions, c = l[l.length - 1], d = e._byClipCacheIndex;
    c._byClipCacheIndex = d, l[d] = c, l.pop(), e._byClipCacheIndex = null;
    const u = o.actionByRoot, h = (e._localRoot || this._root).uuid;
    delete u[h], l.length === 0 && delete r[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let r = i[t];
    r === void 0 && (r = {}, i[t] = r), r[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, r = this._bindingsByRootAndName, o = r[i], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete o[s], Object.keys(o).length === 0 && delete r[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new vo(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Yf
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let r = typeof e == "string" ? ha.findByName(i, e) : e;
    const o = r !== null ? r.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (r !== null ? n = r.blendMode : n = 2500), l !== void 0) {
      const u = l.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      c = l.knownActions[0], r === null && (r = c._clip);
    }
    if (r === null) return null;
    const d = new qf(this, r, t, n);
    return this._bindAction(d, c), this._addInactiveAction(d, o, s), d;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? ha.findByName(n, e) : e, r = s ? s.uuid : e, o = this._actionsByClip[r];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), r = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      t[c]._update(i, e, s, r);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c)
      o[c].apply(r);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const r = s.knownActions;
      for (let o = 0, l = r.length; o !== l; ++o) {
        const c = r[o];
        this._deactivateAction(c);
        const d = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = d, t[d] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const r in n) {
      const o = n[r].actionByRoot, l = o[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const r in s) {
        const o = s[r];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: _a
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = _a);
const yo = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class di {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const $f = new Ri(-1, 1, 1, -1, 0, 1);
class Zf extends $t {
  constructor() {
    super(), this.setAttribute("position", new Yt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Yt([0, 2, 0, 0, 2, 0], 2));
  }
}
const Jf = new Zf();
class wa {
  constructor(e) {
    this._mesh = new bt(Jf, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, $f);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class To extends di {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof vt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = wi.clone(e.uniforms), this.material = new vt({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new wa(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Wr extends di {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const i = e.getContext(), s = e.state;
    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0);
    let r, o;
    this.inverse ? (r = 0, o = 1) : (r = 1, o = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, r, 4294967295), s.buffers.stencil.setClear(o), s.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.color.setMask(!0), s.buffers.depth.setMask(!0), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(!0);
  }
}
class Qf extends di {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class ep {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new De());
      this._width = n.width, this._height = n.height, t = new Rt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: 1016 }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new To(yo), this.copyPass.material.blending = 0, this.clock = new So();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, s = this.passes.length; i < s; i++) {
      const r = this.passes[i];
      if (r.enabled !== !1) {
        if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), r.needsSwap) {
          if (n) {
            const o = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Wr !== void 0 && (r instanceof Wr ? n = !0 : r instanceof Qf && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new De());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let s = 0; s < this.passes.length; s++)
      this.passes[s].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class tp extends di {
  constructor(e, t, n = null, i = null, s = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new re();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let s, r;
    this.overrideMaterial !== null && (r = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (s = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(s), this.overrideMaterial !== null && (this.scene.overrideMaterial = r), e.autoClear = i;
  }
}
const np = {
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new re(0) },
    defaultOpacity: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class ri extends di {
  constructor(e, t, n, i) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new De(e.x, e.y) : new De(256, 256), this.clearColor = new re(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), r = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Rt(s, r, { type: 1016 }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let u = 0; u < this.nMips; u++) {
      const h = new Rt(s, r, { type: 1016 });
      h.texture.name = "UnrealBloomPass.h" + u, h.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(h);
      const f = new Rt(s, r, { type: 1016 });
      f.texture.name = "UnrealBloomPass.v" + u, f.texture.generateMipmaps = !1, this.renderTargetsVertical.push(f), s = Math.round(s / 2), r = Math.round(r / 2);
    }
    const o = np;
    this.highPassUniforms = wi.clone(o.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new vt({
      uniforms: this.highPassUniforms,
      vertexShader: o.vertexShader,
      fragmentShader: o.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), r = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])), this.separableBlurMaterials[u].uniforms.invSize.value = new De(1 / s, 1 / r), s = Math.round(s / 2), r = Math.round(r / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const d = yo;
    this.copyUniforms = wi.clone(d.uniforms), this.blendMaterial = new vt({
      uniforms: this.copyUniforms,
      vertexShader: d.vertexShader,
      fragmentShader: d.fragmentShader,
      blending: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new re(), this.oldClearAlpha = 1, this.basic = new Sn(), this.fsQuad = new wa(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let s = 0; s < this.nMips; s++)
      this.renderTargetsHorizontal[s].setSize(n, i), this.renderTargetsVertical[s].setSize(n, i), this.separableBlurMaterials[s].uniforms.invSize.value = new De(1 / n, 1 / i), n = Math.round(n / 2), i = Math.round(i / 2);
  }
  render(e, t, n, i, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const r = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let o = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = o.texture, this.separableBlurMaterials[l].uniforms.direction.value = ri.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = ri.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), o = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = r;
  }
  getSeperableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
    return new vt({
      defines: {
        KERNEL_RADIUS: e
      },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new De(0.5, 0.5) },
        // inverse texture size
        direction: { value: new De(0.5, 0.5) },
        gaussianCoefficients: { value: t }
        // precomputed Gaussian coefficients
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new vt({
      defines: {
        NUM_MIPS: e
      },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
    });
  }
}
ri.BlurDirectionX = new De(1, 0);
ri.BlurDirectionY = new De(0, 1);
const ip = {
  name: "OutputShader",
  uniforms: {
    tDiffuse: { value: null },
    toneMappingExposure: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
  )
};
class sp extends di {
  constructor() {
    super();
    const e = ip;
    this.uniforms = wi.clone(e.uniforms), this.material = new bf({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new wa(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, Xe.getTransfer(this._outputColorSpace) === nt && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 && (this.material.defines.NEUTRAL_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
function jr(a, e) {
  if (e === 0)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), a;
  if (e === 2 || e === 1) {
    let t = a.getIndex();
    if (t === null) {
      const r = [], o = a.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++)
          r.push(l);
        a.setIndex(r), t = a.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), a;
    }
    const n = t.count - 2, i = [];
    if (e === 2)
      for (let r = 1; r <= n; r++)
        i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
    else
      for (let r = 0; r < n; r++)
        r % 2 === 0 ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2))) : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = a.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), a;
}
class ap extends hi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new hp(t);
    }), this.register(function(t) {
      return new dp(t);
    }), this.register(function(t) {
      return new xp(t);
    }), this.register(function(t) {
      return new Mp(t);
    }), this.register(function(t) {
      return new Sp(t);
    }), this.register(function(t) {
      return new fp(t);
    }), this.register(function(t) {
      return new pp(t);
    }), this.register(function(t) {
      return new mp(t);
    }), this.register(function(t) {
      return new gp(t);
    }), this.register(function(t) {
      return new cp(t);
    }), this.register(function(t) {
      return new _p(t);
    }), this.register(function(t) {
      return new up(t);
    }), this.register(function(t) {
      return new vp(t);
    }), this.register(function(t) {
      return new bp(t);
    }), this.register(function(t) {
      return new op(t);
    }), this.register(function(t) {
      return new yp(t);
    }), this.register(function(t) {
      return new Tp(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const c = Ai.extractUrlBase(e);
      r = Ai.resolveURL(c, this.path);
    } else
      r = Ai.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new Mo(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, r, function(d) {
          t(d), s.manager.itemEnd(e);
        }, o);
      } catch (d) {
        o(d);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const r = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === Ao) {
        try {
          r[He.KHR_BINARY_GLTF] = new Ap(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(r[He.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(l.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Bp(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let d = 0; d < this.pluginCallbacks.length; d++) {
      const u = this.pluginCallbacks[d](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, r[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let d = 0; d < s.extensionsUsed.length; ++d) {
        const u = s.extensionsUsed[d], h = s.extensionsRequired || [];
        switch (u) {
          case He.KHR_MATERIALS_UNLIT:
            r[u] = new lp();
            break;
          case He.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new Ep(s, this.dracoLoader);
            break;
          case He.KHR_TEXTURE_TRANSFORM:
            r[u] = new wp();
            break;
          case He.KHR_MESH_QUANTIZATION:
            r[u] = new Cp();
            break;
          default:
            h.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(r), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function rp() {
  let a = {};
  return {
    get: function(e) {
      return a[e];
    },
    add: function(e, t) {
      a[e] = t;
    },
    remove: function(e) {
      delete a[e];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const He = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class op {
  constructor(e) {
    this.parser = e, this.name = He.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const d = new re(16777215);
    l.color !== void 0 && d.setRGB(l.color[0], l.color[1], l.color[2], dt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ua(d), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new If(d), c.distance = u;
        break;
      case "spot":
        c = new Df(d), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, cn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class lp {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Sn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new re(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const r = s.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], dt), e.opacity = r[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, mt));
    }
    return Promise.all(i);
  }
}
class cp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class hp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new De(o, o);
    }
    return Promise.all(s);
  }
}
class dp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class up {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class fp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new re(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = i.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], dt);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, mt)), r.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s);
  }
}
class pp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(s);
  }
}
class mp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new re().setRGB(o[0], o[1], o[2], dt), Promise.all(s);
  }
}
class gp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class _p {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new re().setRGB(o[0], o[1], o[2], dt), r.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, mt)), Promise.all(s);
  }
}
class bp {
  constructor(e) {
    this.parser = e, this.name = He.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(s);
  }
}
class vp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(s);
  }
}
class xp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, r);
  }
}
class Mp {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const r = s.extensions[t], o = i.images[r.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, r.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Sp {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const r = s.extensions[t], o = i.images[r.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, r.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class yp {
  constructor(e) {
    this.name = He.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, d = i.count, u = i.byteStride, h = new Uint8Array(o, l, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(d, u, h, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : r.ready.then(function() {
          const f = new ArrayBuffer(d * u);
          return r.decodeGltfBuffer(new Uint8Array(f), d, u, h, i.mode, i.filter), f;
        });
      });
    } else
      return null;
  }
}
class Tp {
  constructor(e) {
    this.name = He.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== Bt.TRIANGLES && c.mode !== Bt.TRIANGLE_STRIP && c.mode !== Bt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in r)
      o.push(this.parser.getDependency("accessor", r[c]).then((d) => (l[c] = d, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const d = c.pop(), u = d.isGroup ? d.children : [d], h = c[0].count, f = [];
      for (const g of u) {
        const _ = new Le(), p = new P(), m = new Ut(), x = new P(1, 1, 1), v = new ff(g.geometry, g.material, h);
        for (let T = 0; T < h; T++)
          l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, T), l.ROTATION && m.fromBufferAttribute(l.ROTATION, T), l.SCALE && x.fromBufferAttribute(l.SCALE, T), v.setMatrixAt(T, _.compose(p, m, x));
        for (const T in l)
          if (T === "_COLOR_0") {
            const E = l[T];
            v.instanceColor = new la(E.array, E.itemSize, E.normalized);
          } else T !== "TRANSLATION" && T !== "ROTATION" && T !== "SCALE" && g.geometry.setAttribute(T, l[T]);
        at.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return d.isGroup ? (d.clear(), d.add(...f), d) : f[0];
    }));
  }
}
const Ao = "glTF", Mi = 12, Xr = { JSON: 1313821514, BIN: 5130562 };
class Ap {
  constructor(e) {
    this.name = He.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Mi), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Ao)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Mi, s = new DataView(e, Mi);
    let r = 0;
    for (; r < i; ) {
      const o = s.getUint32(r, !0);
      r += 4;
      const l = s.getUint32(r, !0);
      if (r += 4, l === Xr.JSON) {
        const c = new Uint8Array(e, Mi + r, o);
        this.content = n.decode(c);
      } else if (l === Xr.BIN) {
        const c = Mi + r;
        this.body = e.slice(c, c + o);
      }
      r += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ep {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = He.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const d in r) {
      const u = fa[d] || d.toLowerCase();
      o[u] = r[d];
    }
    for (const d in e.attributes) {
      const u = fa[d] || d.toLowerCase();
      if (r[d] !== void 0) {
        const h = n.accessors[e.attributes[d]], f = Qn[h.componentType];
        c[u] = f.name, l[u] = h.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(d) {
      return new Promise(function(u, h) {
        i.decodeDracoFile(d, function(f) {
          for (const g in f.attributes) {
            const _ = f.attributes[g], p = l[g];
            p !== void 0 && (_.normalized = p);
          }
          u(f);
        }, o, c, dt, h);
      });
    });
  }
}
class wp {
  constructor() {
    this.name = He.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Cp {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}
class Eo extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let r = 0; r !== i; r++)
      t[r] = n[s + r];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, d = i - t, u = (n - t) / d, h = u * u, f = h * u, g = e * c, _ = g - c, p = -2 * f + 3 * h, m = f - h, x = 1 - p, v = m - h + u;
    for (let T = 0; T !== o; T++) {
      const E = r[_ + T + o], R = r[_ + T + l] * d, w = r[g + T + o], D = r[g + T] * d;
      s[T] = x * E + v * R + p * w + m * D;
    }
    return s;
  }
}
const Rp = new Ut();
class Pp extends Eo {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Rp.fromArray(s).normalize().toArray(s), s;
  }
}
const Bt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Qn = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, qr = {
  9728: 1003,
  9729: 1006,
  9984: 1004,
  9985: 1007,
  9986: 1005,
  9987: 1008
}, Yr = {
  33071: 1001,
  33648: 1002,
  10497: 1e3
}, ia = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, fa = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, xn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Dp = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: 2301,
  STEP: 2300
}, sa = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Lp(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new hn({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), a.DefaultMaterial;
}
function Dn(a, e, t) {
  for (const n in t.extensions)
    a[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function cn(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ip(a, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, d = e.length; c < d; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(a);
  const r = [], o = [], l = [];
  for (let c = 0, d = e.length; c < d; c++) {
    const u = e[c];
    if (n) {
      const h = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : a.attributes.position;
      r.push(h);
    }
    if (i) {
      const h = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : a.attributes.normal;
      o.push(h);
    }
    if (s) {
      const h = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : a.attributes.color;
      l.push(h);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const d = c[0], u = c[1], h = c[2];
    return n && (a.morphAttributes.position = d), i && (a.morphAttributes.normal = u), s && (a.morphAttributes.color = h), a.morphTargetsRelative = !0, a;
  });
}
function Up(a, e) {
  if (a.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      a.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        a.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Np(a) {
  let e;
  const t = a.extensions && a.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + aa(t.attributes) : e = a.indices + ":" + aa(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let n = 0, i = a.targets.length; n < i; n++)
      e += ":" + aa(a.targets[n]);
  return e;
}
function aa(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + a[t[n]] + ";";
  return e;
}
function pa(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Fp(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const kp = new Le();
class Bp {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new rp(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, s = !1, r = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, s = o.indexOf("Firefox") > -1, r = s ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || s && r < 98 ? this.textureLoader = new da(this.options.manager) : this.textureLoader = new Ff(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Mo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const o = {
        scene: r[0][i.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Dn(s, o, i), cn(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes)
          l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i].joints;
      for (let o = 0, l = r.length; o < l; o++)
        e[r[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (r, o) => {
      const l = this.associations.get(r);
      l != null && this.associations.set(o, l);
      for (const [c, d] of r.children.entries())
        s(d, o.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, r) {
        return n.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, r) {
      n.load(Ai.resolveURL(t.uri, i.path), s, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const r = ia[i.type], o = Qn[i.componentType], l = i.normalized === !0, c = new o(i.count * r);
      return Promise.resolve(new Et(c, r, l));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(r) {
      const o = r[0], l = ia[i.type], c = Qn[i.componentType], d = c.BYTES_PER_ELEMENT, u = d * l, h = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, p;
      if (f && f !== u) {
        const m = Math.floor(h / f), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
        let v = t.cache.get(x);
        v || (_ = new c(o, m * f, i.count * f / d), v = new lf(_, f / d), t.cache.add(x, v)), p = new Sa(v, l, h % f / d, g);
      } else
        o === null ? _ = new c(i.count * l) : _ = new c(o, h, i.count * l), p = new Et(_, l, g);
      if (i.sparse !== void 0) {
        const m = ia.SCALAR, x = Qn[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, T = i.sparse.values.byteOffset || 0, E = new x(r[1], v, i.sparse.count * m), R = new c(r[2], T, i.sparse.count * l);
        o !== null && (p = new Et(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let w = 0, D = E.length; w < D; w++) {
          const Y = E[w];
          if (p.setX(Y, R[w * l]), l >= 2 && p.setY(Y, R[w * l + 1]), l >= 3 && p.setZ(Y, R[w * l + 2]), l >= 4 && p.setW(Y, R[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = g;
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, r = t.images[s];
    let o = this.textureLoader;
    if (r.uri) {
      const l = n.manager.getHandler(r.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, r = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(d) {
      d.flipY = !1, d.name = r.name || o.name || "", d.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (d.name = o.uri);
      const h = (s.samplers || {})[r.sampler] || {};
      return d.magFilter = qr[h.magFilter] || 1006, d.minFilter = qr[h.minFilter] || 1008, d.wrapS = Yr[h.wrapS] || 1e3, d.wrapT = Yr[h.wrapT] || 1e3, i.associations.set(d, { textures: e }), d;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const r = i.images[e], o = self.URL || self.webkitURL;
    let l = r.uri || "", c = !1;
    if (r.bufferView !== void 0)
      l = n.getDependency("bufferView", r.bufferView).then(function(u) {
        c = !0;
        const h = new Blob([u], { type: r.mimeType });
        return l = o.createObjectURL(h), l;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const d = Promise.resolve(l).then(function(u) {
      return new Promise(function(h, f) {
        let g = h;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const p = new gt(_);
          p.needsUpdate = !0, h(p);
        }), t.load(Ai.resolveURL(u, s.path), g, void 0, f);
      });
    }).then(function(u) {
      return c === !0 && o.revokeObjectURL(l), cn(u, r), u.userData.mimeType = r.mimeType || Fp(r.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = d, d;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (r = r.clone(), r.channel = n.texCoord), s.extensions[He.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[He.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = s.associations.get(r);
          r = s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), s.associations.set(r, l);
        }
      }
      return i !== void 0 && (r.colorSpace = i), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new _o(), qt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new go(), qt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || s || r) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = !0), r && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return hn;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let r;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[He.KHR_MATERIALS_UNLIT]) {
      const u = i[He.KHR_MATERIALS_UNLIT];
      r = u.getMaterialType(), c.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new re(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const h = u.baseColorFactor;
        o.color.setRGB(h[0], h[1], h[2], dt), o.opacity = h[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, mt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), r = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = 2);
    const d = s.alphaMode || sa.OPAQUE;
    if (d === sa.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, d === sa.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && r !== Sn && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new De(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && r !== Sn && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && r !== Sn) {
      const u = s.emissiveFactor;
      o.emissive = new re().setRGB(u[0], u[1], u[2], dt);
    }
    return s.emissiveTexture !== void 0 && r !== Sn && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, mt)), Promise.all(c).then(function() {
      const u = new r(o);
      return s.name && (u.name = s.name), cn(u, s), t.associations.set(u, { materials: e }), s.extensions && Dn(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return Kr(l, o, t);
      });
    }
    const r = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], d = Np(c), u = i[d];
      if (u)
        r.push(u.promise);
      else {
        let h;
        c.extensions && c.extensions[He.KHR_DRACO_MESH_COMPRESSION] ? h = s(c) : h = Kr(new $t(), c, t), i[d] = { primitive: c, promise: h }, r.push(h);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], r = s.primitives, o = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const d = r[l].material === void 0 ? Lp(this.cache) : this.getDependency("material", r[l].material);
      o.push(d);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), d = l[l.length - 1], u = [];
      for (let f = 0, g = d.length; f < g; f++) {
        const _ = d[f], p = r[f];
        let m;
        const x = c[f];
        if (p.mode === Bt.TRIANGLES || p.mode === Bt.TRIANGLE_STRIP || p.mode === Bt.TRIANGLE_FAN || p.mode === void 0)
          m = s.isSkinnedMesh === !0 ? new hf(_, x) : new bt(_, x), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), p.mode === Bt.TRIANGLE_STRIP ? m.geometry = jr(m.geometry, 1) : p.mode === Bt.TRIANGLE_FAN && (m.geometry = jr(m.geometry, 2));
        else if (p.mode === Bt.LINES)
          m = new pf(_, x);
        else if (p.mode === Bt.LINE_STRIP)
          m = new ya(_, x);
        else if (p.mode === Bt.LINE_LOOP)
          m = new mf(_, x);
        else if (p.mode === Bt.POINTS)
          m = new gf(_, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Up(m, s), m.name = t.createUniqueName(s.name || "mesh_" + e), cn(m, s), p.extensions && Dn(i, m, p), t.assignFinalMaterial(m), u.push(m);
      }
      for (let f = 0, g = u.length; f < g; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return s.extensions && Dn(i, u[0], s), u[0];
      const h = new dn();
      s.extensions && Dn(i, h, s), t.associations.set(h, { meshes: e });
      for (let f = 0, g = u.length; f < g; f++)
        h.add(u[f]);
      return h;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new yt(Vt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ri(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), cn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), r = i, o = [], l = [];
      for (let c = 0, d = r.length; c < d; c++) {
        const u = r[c];
        if (u) {
          o.push(u);
          const h = new Le();
          s !== null && h.fromArray(s.array, c * 16), l.push(h);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new _s(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, r = [], o = [], l = [], c = [], d = [];
    for (let u = 0, h = i.channels.length; u < h; u++) {
      const f = i.channels[u], g = i.samplers[f.sampler], _ = f.target, p = _.node, m = i.parameters !== void 0 ? i.parameters[g.input] : g.input, x = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (r.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", m)), l.push(this.getDependency("accessor", x)), c.push(g), d.push(_));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(d)
    ]).then(function(u) {
      const h = u[0], f = u[1], g = u[2], _ = u[3], p = u[4], m = [];
      for (let x = 0, v = h.length; x < v; x++) {
        const T = h[x], E = f[x], R = g[x], w = _[x], D = p[x];
        if (T === void 0) continue;
        T.updateMatrix && T.updateMatrix();
        const Y = n._createAnimationTracks(T, E, R, w, D);
        if (Y)
          for (let b = 0; b < Y.length; b++)
            m.push(Y[b]);
      }
      return new ha(s, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const r = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), r = [], o = i.children || [];
    for (let c = 0, d = o.length; c < d; c++)
      r.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(r),
      l
    ]).then(function(c) {
      const d = c[0], u = c[1], h = c[2];
      h !== null && d.traverse(function(f) {
        f.isSkinnedMesh && f.bind(h, kp);
      });
      for (let f = 0, g = u.length; f < g; f++)
        d.add(u[f]);
      return d;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], r = s.name ? i.createUniqueName(s.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, s.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let d;
      if (s.isBone === !0 ? d = new mo() : c.length > 1 ? d = new dn() : c.length === 1 ? d = c[0] : d = new at(), d !== c[0])
        for (let u = 0, h = c.length; u < h; u++)
          d.add(c[u]);
      if (s.name && (d.userData.name = s.name, d.name = r), cn(d, s), s.extensions && Dn(n, d, s), s.matrix !== void 0) {
        const u = new Le();
        u.fromArray(s.matrix), d.applyMatrix4(u);
      } else
        s.translation !== void 0 && d.position.fromArray(s.translation), s.rotation !== void 0 && d.quaternion.fromArray(s.rotation), s.scale !== void 0 && d.scale.fromArray(s.scale);
      return i.associations.has(d) || i.associations.set(d, {}), i.associations.get(d).nodes = e, d;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new dn();
    n.name && (s.name = i.createUniqueName(n.name)), cn(s, n), n.extensions && Dn(t, s, n);
    const r = n.nodes || [], o = [];
    for (let l = 0, c = r.length; l < c; l++)
      o.push(i.getDependency("node", r[l]));
    return Promise.all(o).then(function(l) {
      for (let d = 0, u = l.length; d < u; d++)
        s.add(l[d]);
      const c = (d) => {
        const u = /* @__PURE__ */ new Map();
        for (const [h, f] of i.associations)
          (h instanceof qt || h instanceof gt) && u.set(h, f);
        return d.traverse((h) => {
          const f = i.associations.get(h);
          f != null && u.set(h, f);
        }), u;
      };
      return i.associations = c(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const r = [], o = e.name ? e.name : e.uuid, l = [];
    xn[s.path] === xn.weights ? e.traverse(function(h) {
      h.morphTargetInfluences && l.push(h.name ? h.name : h.uuid);
    }) : l.push(o);
    let c;
    switch (xn[s.path]) {
      case xn.weights:
        c = ii;
        break;
      case xn.rotation:
        c = si;
        break;
      case xn.position:
      case xn.scale:
        c = ai;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ii;
            break;
          case 2:
          case 3:
          default:
            c = ai;
            break;
        }
        break;
    }
    const d = i.interpolation !== void 0 ? Dp[i.interpolation] : 2301, u = this._getArrayFromAccessor(n);
    for (let h = 0, f = l.length; h < f; h++) {
      const g = new c(
        l[h] + "." + xn[s.path],
        t.array,
        u,
        d
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), r.push(g);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = pa(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, r = t.length; s < r; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof si ? Pp : Eo;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Op(a, e, t) {
  const n = e.attributes, i = new un();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new P(l[0], l[1], l[2]),
        new P(c[0], c[1], c[2])
      ), o.normalized) {
        const d = pa(Qn[o.componentType]);
        i.min.multiplyScalar(d), i.max.multiplyScalar(d);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new P(), l = new P();
    for (let c = 0, d = s.length; c < d; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const h = t.json.accessors[u.POSITION], f = h.min, g = h.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), h.normalized) {
            const _ = pa(Qn[h.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  a.boundingBox = i;
  const r = new Jt();
  i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, a.boundingSphere = r;
}
function Kr(a, e, t) {
  const n = e.attributes, i = [];
  function s(r, o) {
    return t.getDependency("accessor", r).then(function(l) {
      a.setAttribute(o, l);
    });
  }
  for (const r in n) {
    const o = fa[r] || r.toLowerCase();
    o in a.attributes || i.push(s(n[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    i.push(r);
  }
  return Xe.workingColorSpace !== dt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`), cn(a, e), Op(a, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Ip(a, e.targets, t) : a;
  });
}
var Gp = function() {
  var a = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : a, s, r = WebAssembly.instantiate(o(i), {}).then(function(m) {
    s = m.instance, s.exports.__wasm_call_ctors();
  });
  function o(m) {
    for (var x = new Uint8Array(m.length), v = 0; v < m.length; ++v) {
      var T = m.charCodeAt(v);
      x[v] = T > 96 ? T - 97 : T > 64 ? T - 39 : T + 4;
    }
    for (var E = 0, v = 0; v < m.length; ++v)
      x[E++] = x[v] < 60 ? n[x[v]] : (x[v] - 60) * 64 + x[++v];
    return x.buffer.slice(0, E);
  }
  function l(m, x, v, T, E, R) {
    var w = s.exports.sbrk, D = v + 3 & -4, Y = w(D * T), b = w(E.length), y = new Uint8Array(s.exports.memory.buffer);
    y.set(E, b);
    var B = m(Y, v, T, b, E.length);
    if (B == 0 && R && R(Y, D, T), x.set(y.subarray(Y, Y + v * T)), w(Y - w(0)), B != 0)
      throw new Error("Malformed buffer data: " + B);
  }
  var c = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, d = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, u = [], h = 0;
  function f(m) {
    var x = {
      object: new Worker(m),
      pending: 0,
      requests: {}
    };
    return x.object.onmessage = function(v) {
      var T = v.data;
      x.pending -= T.count, x.requests[T.id][T.action](T.value), delete x.requests[T.id];
    }, x;
  }
  function g(m) {
    for (var x = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + l.toString() + p.toString(), v = new Blob([x], { type: "text/javascript" }), T = URL.createObjectURL(v), E = 0; E < m; ++E)
      u[E] = f(T);
    URL.revokeObjectURL(T);
  }
  function _(m, x, v, T, E) {
    for (var R = u[0], w = 1; w < u.length; ++w)
      u[w].pending < R.pending && (R = u[w]);
    return new Promise(function(D, Y) {
      var b = new Uint8Array(v), y = h++;
      R.pending += m, R.requests[y] = { resolve: D, reject: Y }, R.object.postMessage({ id: y, count: m, size: x, source: b, mode: T, filter: E }, [b.buffer]);
    });
  }
  function p(m) {
    r.then(function() {
      var x = m.data;
      try {
        var v = new Uint8Array(x.count * x.size);
        l(s.exports[x.mode], v, x.count, x.size, x.source, s.exports[x.filter]), self.postMessage({ id: x.id, count: x.count, action: "resolve", value: v }, [v.buffer]);
      } catch (T) {
        self.postMessage({ id: x.id, count: x.count, action: "reject", value: T });
      }
    });
  }
  return {
    ready: r,
    supported: !0,
    useWorkers: function(m) {
      g(m);
    },
    decodeVertexBuffer: function(m, x, v, T, E) {
      l(s.exports.meshopt_decodeVertexBuffer, m, x, v, T, s.exports[c[E]]);
    },
    decodeIndexBuffer: function(m, x, v, T) {
      l(s.exports.meshopt_decodeIndexBuffer, m, x, v, T);
    },
    decodeIndexSequence: function(m, x, v, T) {
      l(s.exports.meshopt_decodeIndexSequence, m, x, v, T);
    },
    decodeGltfBuffer: function(m, x, v, T, E, R) {
      l(s.exports[d[E]], m, x, v, T, s.exports[c[R]]);
    },
    decodeGltfBufferAsync: function(m, x, v, T, E) {
      return u.length > 0 ? _(m, x, v, d[T], c[E]) : r.then(function() {
        var R = new Uint8Array(m * x);
        return l(s.exports[d[T]], R, m, x, v, s.exports[c[E]]), R;
      });
    }
  };
}();
function zp(a, e) {
  const t = a.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (l, c, d) => new re(l, c, d).convertSRGBToLinear(), i = !!e.pbrMaskMap, s = !!e.emissiveMap, r = {
    maskTintMap1: { value: e.maskTintMap1 },
    maskTintMap2: { value: e.maskTintMap2 },
    tintColorR1: e.tintColorR1Uniform ?? { value: e.tintColorR1 ?? n(0.957, 0.769, 0.725) },
    tintColorG1: { value: e.tintColorG1 ?? n(0.996, 0.553, 0.688) },
    tintColorB1: { value: e.tintColorB1 ?? n(0.902, 0.902, 0.902) },
    tintColorR2: { value: e.tintColorR2 ?? new re(0, 0, 0) },
    tintColorG2: { value: e.tintColorG2 ?? new re(0, 0, 0) },
    tintColorB2: { value: e.tintColorB2 ?? new re(0, 0, 0) },
    rimEdgePower: { value: e.rimEdgePower ?? 5 },
    rimPower: { value: e.rimPower ?? 0.4 },
    rimColor: { value: e.rimColor ?? n(0.447, 0.565, 0.671) },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {},
    ...s ? {
      emissiveMap: { value: e.emissiveMap },
      emissiveStrength: { value: e.emissiveStrength ?? 1 },
      emissiveTintColor: { value: e.emissiveTintColor ?? new re(1, 1, 1) }
    } : {},
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.onBeforeCompile = (l) => {
    for (const [_, p] of Object.entries(r))
      l.uniforms[_] = p;
    const u = (
      /* glsl */
      `
            uniform sampler2D maskTintMap1;
            uniform sampler2D maskTintMap2;
            uniform vec3 tintColorR1;
            uniform vec3 tintColorG1;
            uniform vec3 tintColorB1;
            uniform vec3 tintColorR2;
            uniform vec3 tintColorG2;
            uniform vec3 tintColorB2;
            uniform float rimEdgePower;
            uniform float rimPower;
            uniform vec3 rimColor;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            varying vec3 vObjPosition;
            ${i ? (
        /* glsl */
        `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
      ) : ""}
            ${s ? (
        /* glsl */
        `
            uniform sampler2D emissiveMap;
            uniform float emissiveStrength;
            uniform vec3 emissiveTintColor;
        `
      ) : ""}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      u + `
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <common>",
      `varying vec3 vObjPosition;
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <skinning_vertex>",
      `#include <skinning_vertex>
vObjPosition = transformed;`
    );
    const h = (
      /* glsl */
      `
            // Volume Mask: 오브젝트 공간에서 중심점 기준 구면 클리핑
            if (volumeMaskEnable > 0.5) {
                float vmd = distance(vObjPosition, volumeMaskCenter);
                if (vmd > volumeMaskRadius) discard;
            }
            {
                vec2 maskUv = vMapUv;
                vec4 mask1 = texture2D(maskTintMap1, maskUv);
                vec4 mask2 = texture2D(maskTintMap2, maskUv);

                vec3 tint1 = mask1.r * tintColorR1 + mask1.g * tintColorG1 + mask1.b * tintColorB1;
                vec3 tint2 = mask2.r * tintColorR2 + mask2.g * tintColorG2 + mask2.b * tintColorB2;
                vec3 blendSrc = tint1 + tint2;

                // Hard Light blend
                vec3 base = diffuseColor.rgb;
                vec3 result1 = 1.0 - 2.0 * (1.0 - base) * (1.0 - blendSrc);
                vec3 result2 = 2.0 * base * blendSrc;
                vec3 zeroOrOne = step(blendSrc, vec3(0.5));
                vec3 hardLight = result2 * zeroOrOne + (1.0 - zeroOrOne) * result1;

                diffuseColor.rgb = mix(base, hardLight, mask1.a);
            }
        `
    );
    if (l.fragmentShader = l.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + h
    ), i) {
      const _ = (
        /* glsl */
        `
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
            `
      );
      l.fragmentShader = l.fragmentShader.replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
` + _
      );
      const p = (
        /* glsl */
        `
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = (1.0 - pbrMask2.a) * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }
            `
      );
      l.fragmentShader = l.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
` + p
      );
      const m = (
        /* glsl */
        `
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
            `
      );
      l.fragmentShader = l.fragmentShader.replace(
        "#include <aomap_fragment>",
        `#include <aomap_fragment>
` + m
      );
    }
    const g = (
      /* glsl */
      `
            {
                vec3 viewDir = normalize(vViewPosition);
                float NdotV = dot(normal, viewDir);
                float fresnel = 1.0 - clamp(NdotV, 0.0, 1.0);
                float rim = pow(fresnel, rimEdgePower) * rimPower;
                totalEmissiveRadiance += rim * rimColor;
            }
            ${s ? (
        /* glsl */
        `
            {
                // OZ_PBR_Mask2Tint_Emissive: emissiveMap.rgb + (tintColor * emissiveMap.a * strength)
                vec4 eSample = texture2D(emissiveMap, vMapUv);
                vec3 glow = emissiveTintColor * eSample.a * emissiveStrength;
                vec3 emTotal = eSample.rgb + glow;
                totalEmissiveRadiance += emTotal;

                // emissive 강한 픽셀 → PBR 라이팅 억제 (bloom 색상 유지)
                float emMask = clamp(length(emTotal) * 0.5, 0.0, 1.0);
                diffuseColor.rgb *= (1.0 - emMask);
            }
        `
      ) : ""}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + g
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = ${s ? "1.0" : "0.0"};`
    );
  };
  const o = "OZMask2Tint" + (i ? "_PBR" : "") + (s ? "_E" : "");
  return t.customProgramCacheKey = () => o, t.userData.uniforms = r, t;
}
function Hp(a) {
  return a.userData.decalSlots ?? null;
}
function Vp(a, e) {
  const t = a.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (h, f, g) => new re(h, f, g).convertSRGBToLinear(), i = !!e.pbrMaskMap, s = e.decalSlots ?? 0, r = s > 0, o = [], l = {};
  let c = null;
  if (r) {
    const h = new Uint8Array([0, 0, 0, 0]);
    c = new gs(h, 1, 1, 1023), c.needsUpdate = !0;
  }
  for (let h = 0; h < s; h++) {
    const f = {
      enabled: { value: 0 },
      texture: { value: c },
      color: { value: new Ve(1, 1, 1, 1) },
      invMatrix: { value: new Le() },
      useSkinColor: { value: 0 }
    };
    o.push(f), l[`decalEnabled${h}`] = f.enabled, l[`decalTex${h}`] = f.texture, l[`decalColor${h}`] = f.color, l[`decalInvMatrix${h}`] = f.invMatrix, l[`decalUseSkinColor${h}`] = f.useSkinColor;
  }
  const d = {
    maskTintMap: { value: e.maskTintMap },
    tintColorR: e.tintColorRUniform ?? { value: e.tintColorR ?? n(0.957, 0.769, 0.725) },
    tintColorG: { value: e.tintColorG ?? n(0, 0, 0) },
    tintColorB: { value: e.tintColorB ?? n(0, 0, 0) },
    rimEdgePower: { value: e.rimEdgePower ?? 7.5 },
    rimPower: { value: e.rimPower ?? 0.4 },
    rimColor: { value: e.rimColor ?? n(0.447, 0.565, 0.671) },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 1 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {},
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 },
    ...l
  };
  t.onBeforeCompile = (h) => {
    for (const [E, R] of Object.entries(d))
      h.uniforms[E] = R;
    const f = i ? (
      /* glsl */
      `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
    ) : "";
    let g = "";
    if (r) {
      g = `varying vec3 vWorldPosition;
`;
      for (let E = 0; E < s; E++)
        g += `
            uniform float decalEnabled${E};
            uniform sampler2D decalTex${E};
            uniform vec4 decalColor${E};
            uniform mat4 decalInvMatrix${E};
            uniform float decalUseSkinColor${E};
                `;
    }
    const _ = (
      /* glsl */
      `
            uniform sampler2D maskTintMap;
            uniform vec3 tintColorR;
            uniform vec3 tintColorG;
            uniform vec3 tintColorB;
            uniform float rimEdgePower;
            uniform float rimPower;
            uniform vec3 rimColor;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            varying vec3 vObjPosition;
            ${f}
            ${g}
        `
    );
    h.fragmentShader = h.fragmentShader.replace(
      "#include <common>",
      _ + `
#include <common>`
    );
    let p = `varying vec3 vObjPosition;
`;
    r && (p += `varying vec3 vWorldPosition;
`), h.vertexShader = h.vertexShader.replace(
      "#include <common>",
      p + "#include <common>"
    );
    let m = `#include <skinning_vertex>
vObjPosition = transformed;`;
    r && (m += `
vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`), h.vertexShader = h.vertexShader.replace(
      "#include <skinning_vertex>",
      m
    );
    const x = (
      /* glsl */
      `
            // Volume Mask: 오브젝트 공간에서 중심점 기준 구면 클리핑
            if (volumeMaskEnable > 0.5) {
                float vmd = distance(vObjPosition, volumeMaskCenter);
                if (vmd > volumeMaskRadius) discard;
            }
            {
                vec2 maskUv = vMapUv;
                vec4 mask = texture2D(maskTintMap, maskUv);

                vec3 tint = mask.r * tintColorR + mask.g * tintColorG + mask.b * tintColorB;

                // Hard Light blend
                vec3 base = diffuseColor.rgb;
                vec3 result1 = 1.0 - 2.0 * (1.0 - base) * (1.0 - tint);
                vec3 result2 = 2.0 * base * tint;
                vec3 zeroOrOne = step(tint, vec3(0.5));
                vec3 hardLight = result2 * zeroOrOne + (1.0 - zeroOrOne) * result1;

                diffuseColor.rgb = mix(base, hardLight, mask.a);
            }
        `
    );
    let v = "";
    if (r)
      for (let E = 0; E < s; E++)
        v += /* glsl */
        `
            if (decalEnabled${E} > 0.5) {
                vec4 dLocal${E} = decalInvMatrix${E} * vec4(vWorldPosition, 1.0);
                vec3 dUv${E} = dLocal${E}.xyz / dLocal${E}.w;
                if (dUv${E}.x >= 0.0 && dUv${E}.x <= 1.0 &&
                    dUv${E}.y >= 0.0 && dUv${E}.y <= 1.0 &&
                    dUv${E}.z >= 0.0 && dUv${E}.z <= 1.0) {
                    vec2 decalUv${E} = vec2(1.0 - dUv${E}.x, 1.0 - dUv${E}.y);
                    vec4 dSample${E} = texture2D(decalTex${E}, decalUv${E});
                    float dAlpha${E} = dSample${E}.a * decalColor${E}.a;
                    vec3 dTexColor${E} = dSample${E}.rgb;

                    if (decalUseSkinColor${E} > 0.5) {
                        // OZ_Decal_Skin: Blend(base=skinColor, blend=tex, mode=Multiply)
                        vec3 dResult${E} = tintColorR * dTexColor${E};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dResult${E}, dAlpha${E});
                    } else {
                        // OZ_Decal_Color: Blend(base=_Color, blend=tex, mode=HardLight)
                        vec3 dBase${E} = decalColor${E}.rgb;
                        vec3 dBlend${E} = dTexColor${E};
                        vec3 dHL1_${E} = 1.0 - 2.0 * (1.0 - dBase${E}) * (1.0 - dBlend${E});
                        vec3 dHL2_${E} = 2.0 * dBase${E} * dBlend${E};
                        vec3 dStep${E} = step(dBlend${E}, vec3(0.5));
                        vec3 dHardLight${E} = dHL2_${E} * dStep${E} + (1.0 - dStep${E}) * dHL1_${E};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dHardLight${E}, dAlpha${E});
                    }
                }
            }
                `;
    if (h.fragmentShader = h.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + x + v
    ), i) {
      const E = (
        /* glsl */
        `
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
            `
      );
      h.fragmentShader = h.fragmentShader.replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
` + E
      );
      const R = (
        /* glsl */
        `
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = (1.0 - pbrMask2.a) * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }
            `
      );
      h.fragmentShader = h.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
` + R
      );
      const w = (
        /* glsl */
        `
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
            `
      );
      h.fragmentShader = h.fragmentShader.replace(
        "#include <aomap_fragment>",
        `#include <aomap_fragment>
` + w
      );
    }
    const T = (
      /* glsl */
      `
            {
                vec3 viewDir = normalize(vViewPosition);
                float NdotV = dot(normal, viewDir);
                float fresnel = 1.0 - clamp(NdotV, 0.0, 1.0);
                float rim = pow(fresnel, rimEdgePower) * rimPower;
                totalEmissiveRadiance += rim * rimColor;
            }
        `
    );
    h.fragmentShader = h.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + T
    ), h.fragmentShader = h.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 0.0;`
    );
  };
  const u = r ? `_D${s}` : "";
  return t.customProgramCacheKey = () => (i ? "OZMaskTint_PBR" : "OZMaskTint") + u, t.userData.uniforms = d, r && (t.userData.decalSlots = o), t;
}
function Wp(a, e) {
  const t = a.clone(), n = !!e.blend, i = n || e.enableSecondaryLobe === !1, s = (l, c, d) => new re(l, c, d).convertSRGBToLinear(), r = {
    hairBaseColor: { value: e.baseColor ?? s(0.752, 0.535, 0.475) },
    hairSpecColor: { value: e.specColor ?? s(0.567, 0.404, 0.397) },
    hairSmoothness: { value: e.smoothness ?? 0.65 },
    hairSpecShift: { value: -(e.specularShift ?? -1) },
    hairSpecExponent: { value: e.specularExponent ?? 0 },
    hairSpecTint: { value: e.specularTint ?? new re(1, 1, 1) },
    hairSecSpecShift: { value: -(e.secondarySpecularShift ?? 0.18) },
    hairSecSpecExponent: { value: e.secondarySpecularExponent ?? 0.75 },
    hairSecSpecTint: { value: e.secondarySpecularTint ?? new re(1, 1, 1) },
    hairRimTransmission: { value: e.hairRim ?? 3 },
    hairShiftDir: { value: e.shiftDirection ?? 1 },
    hairMaskMap: { value: e.maskMap ?? null },
    hairAlphaClip: { value: e.blend ? 0 : e.alphaClip ?? 0.5 },
    hairSpecIntensity: { value: 1 },
    hairGeomNormalTBN: { value: 0 },
    hairGaussianSpec: { value: 0 },
    hairSpecAAScale: { value: 0 },
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.color.set(1, 1, 1), t.envMapIntensity = 0, t.side = e.doubleSided !== !1 ? 2 : 0, e.blend && (t.transparent = !0, t.depthWrite = !1, t.premultipliedAlpha = !0, t.alphaTest = 0);
  const o = e.normalInten ?? 1;
  if (e.normalMap)
    t.normalMap = e.normalMap, t.normalScale.set(o, o);
  else if (!t.normalMap) {
    const l = new Uint8Array([128, 128, 255, 255]), c = new gs(l, 1, 1, 1023);
    c.needsUpdate = !0, t.normalMap = c, t.normalScale.set(1, 1);
  }
  return t.onBeforeCompile = (l) => {
    for (const [h, f] of Object.entries(r))
      l.uniforms[h] = f;
    const c = (
      /* glsl */
      `
            uniform vec3 hairBaseColor;
            uniform vec3 hairSpecColor;
            uniform float hairSmoothness;
            uniform float hairSpecShift;
            uniform float hairSpecExponent;
            uniform vec3 hairSpecTint;
            uniform float hairSecSpecShift;
            uniform float hairSecSpecExponent;
            uniform vec3 hairSecSpecTint;
            uniform float hairRimTransmission;
            uniform float hairShiftDir;
            uniform sampler2D hairMaskMap;
            uniform float hairAlphaClip;
            uniform float hairSpecIntensity;
            uniform float hairGeomNormalTBN;
            uniform float hairGaussianSpec;
            uniform float hairSpecAAScale;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            varying vec3 vObjPosition;
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      c + `
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <common>",
      `varying vec3 vObjPosition;
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <skinning_vertex>",
      `#include <skinning_vertex>
vObjPosition = transformed;`
    );
    const d = (
      /* glsl */
      `
            {
                // Volume Mask: 오브젝트 공간에서 중심점 기준 구면 클리핑
                if (volumeMaskEnable > 0.5) {
                    float vmd = distance(vObjPosition, volumeMaskCenter);
                    if (vmd > volumeMaskRadius) discard;
                }
                if (diffuseColor.a < hairAlphaClip) discard;
                diffuseColor.rgb *= hairBaseColor;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + d
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      `vec3 _hairGeomNormal = normal;
#include <normal_fragment_maps>`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>
metalnessFactor = 0.0;`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
roughnessFactor = 1.0;`
    );
    const u = (
      /* glsl */
      `
            {
                // ── Re-read base map for hair albedo (diffuseColor was zeroed) ──
                #ifdef USE_MAP
                    vec4 _hairBaseMap = texture2D(map, vMapUv);
                #else
                    vec4 _hairBaseMap = vec4(1.0);
                #endif
                vec3 hairAlbedo = hairBaseColor * _hairBaseMap.rgb;

                // ── Mask Map: R=Smoothness mult, G=AO, B=HairShift ──
                vec4 hairMask = texture2D(hairMaskMap, vMapUv);
                float maskSmoothness = hairMask.r;
                float maskAO = hairMask.g;
                float maskShift = hairMask.b;

                // Specular color = _SpecColor * MaskMap.R
                vec3 hairSpec = hairSpecColor * maskSmoothness;

                // ── TBN vectors (view space) ──
                // Unity: TBN은 vertex 보간된 geometry basis에서 구축.
                // 노말맵은 셰이딩 노말만 변경하고, TBN 자체를 왜곡하지 않음.
                // → TBN 구축에는 geometry normal, 라이팅에는 normal-mapped normal 사용.
                vec3 N_tbn = _hairGeomNormal;
                vec3 N = normal;
                #ifdef USE_TANGENT
                    // faceDirection 적용: DOUBLE_SIDED에서 vTangent/vBitangent은 raw varying이므로
                    // normal_fragment_begin에서 faceDirection이 곱해진 N_tbn과 일치시켜야 함.
                    vec3 T = normalize(vTangent) * faceDirection;
                    // vBitangent = cross(N, T) * tangent.w (탄젠트 핸드니스 포함)
                    // Unity와 동일한 방향. cross 직접 계산은 tangent.w 누락으로 방향 틀어짐.
                    vec3 B = normalize(vBitangent) * faceDirection;
                    // Re-orthogonalize against geometry normal
                    T = normalize(T - N_tbn * dot(N_tbn, T));
                    B = normalize(B - N_tbn * dot(N_tbn, B));
                #else
                    // Fallback: derive from derivatives
                    vec3 T = normalize(dFdx(vViewPosition));
                    vec3 B = normalize(cross(N_tbn, T));
                #endif

                // Strand direction: _StrandDir = 0 → bitangent
                vec3 strandDir = B;

                // ── Smoothness → BlinnPhong Exponent pipeline ──
                // Unity: primarySmoothness = _SpecularExponent * _Smoothness
                float priSmooth = hairSpecExponent * hairSmoothness;
                float secSmooth = hairSecSpecExponent * hairSmoothness;

                // PerceptualSmoothnessToPerceptualRoughness → PerceptualRoughnessToRoughness → BlinnPhongExponent
                float priPR = 1.0 - priSmooth;
                float priR  = priPR * priPR;
                float priExp = clamp(2.0 / max(priR * priR, 0.0001) - 2.0, 0.0001, 100000.0);

                float secPR = 1.0 - secSmooth;
                float secR  = secPR * secPR;
                float secExp = clamp(2.0 / max(secR * secR, 0.0001) - 2.0, 0.0001, 100000.0);

                // ── Shift tangents ──
                // Unity ShaderGraph: MaskMap.B × _SpecularShift를 미리 곱한 후 Lighting_half에 전달.
                // ShiftTangent_Lux(strandDir, N, shift) = normalize(strandDir + N * shift)
                float shift1 = hairShiftDir * maskShift * hairSpecShift;
                float shift2 = hairShiftDir * maskShift * hairSecSpecShift;
                vec3 t1 = normalize(strandDir + N * shift1);
                vec3 t2 = normalize(strandDir + N * shift2);

                // ── View direction ──
                vec3 V = normalize(vViewPosition);
                float geomNdotV = dot(N_tbn, V);

                vec3 totalHairDirect = vec3(0.0);

                // ── Directional lights ──
                #if NUM_DIR_LIGHTS > 0
                for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
                    vec3 L = directionalLights[i].direction;
                    vec3 lightColor = directionalLights[i].color;

                    float NdotL = dot(N, L);
                    float LdotV = dot(L, V);
                    float invLenLV = inversesqrt(max(2.0 * LdotV + 2.0, 0.0001));
                    vec3 H = (L + V) * invLenLV;

                    // D_KajiyaKay primary lobe
                    float TdotH1 = dot(t1, H);
                    float sinTHSq1 = clamp(1.0 - TdotH1 * TdotH1, 0.0, 1.0);
                    float dirAttn1 = clamp(TdotH1 + 1.0, 0.0, 1.0);
                    float norm1 = (priExp + 2.0) * 0.5 * RECIPROCAL_PI;
                    float priLobe = hairGaussianSpec > 0.5
                        ? exp(-priExp * 0.5 * (1.0 - sinTHSq1))
                        : pow(max(sinTHSq1, 0.0001), 0.5 * priExp);
                    vec3 hairSpec1 = hairSpecTint * dirAttn1 * norm1 * priLobe;

                    // D_KajiyaKay secondary lobe
                    ${i ? "// _EnableSecondaryLobe=0" : ""}
                    float TdotH2 = dot(t2, H);
                    float sinTHSq2 = clamp(1.0 - TdotH2 * TdotH2, 0.0, 1.0);
                    float dirAttn2 = clamp(TdotH2 + 1.0, 0.0, 1.0);
                    float norm2 = (secExp + 2.0) * 0.5 * RECIPROCAL_PI;
                    float secLobe = hairGaussianSpec > 0.5
                        ? exp(-secExp * 0.5 * (1.0 - sinTHSq2))
                        : pow(max(sinTHSq2, 0.0001), 0.5 * secExp);
                    vec3 hairSpec2 = ${i ? "vec3(0.0)" : "hairSecSpecTint * dirAttn2 * norm2 * secLobe"};

                    // Fresnel (F_Schlick)
                    float LdotH = clamp(dot(L, H), 0.0, 1.0);
                    vec3 F = hairSpec + (1.0 - hairSpec) * pow(1.0 - LdotH, 5.0);

                    // Specular anti-aliasing: 끝자락에서 노말이 급변하면
                    // pow(sinTHSq, priExp)가 픽셀마다 튀어 노이즈 발생.
                    // fwidth(N)으로 노말 변화량 감지 → 스페큘러 감쇠.
                    float normalVariance = length(fwidth(N));
                    float specAA = 1.0 / (1.0 + normalVariance * hairSpecAAScale);

                    vec3 specR = hairSpecIntensity * specAA * 0.25 * F * (hairSpec1 + hairSpec2)
                               * clamp(NdotL, 0.0, 1.0)
                               * clamp(geomNdotV * 65504.0, 0.0, 1.0);

                    // Transmission (Yibing/Morten hybrid scatter model)
                    float scatterFresnel1 = pow(clamp(-LdotV, 0.0, 1.0), 9.0)
                                          * pow(clamp(1.0 - geomNdotV * geomNdotV, 0.0, 1.0), 12.0);
                    float scatterFresnel2 = pow(clamp(1.0 - geomNdotV, 0.0, 1.0), 4.0);
                    float transmission = scatterFresnel1 + hairRimTransmission * scatterFresnel2;
                    vec3 specT = hairAlbedo * transmission;

                    // Diffuse
                    vec3 hairDiffuse = hairAlbedo * clamp(NdotL, 0.0, 1.0);

                    totalHairDirect += (hairDiffuse + specR + specT) * lightColor * RECIPROCAL_PI;
                }
                #endif

                // ── Ambient / GI ──
                // 커스텀 ambient 계산 제거 — three.js 기본 indirectDiffuse를 그대로 사용.
                // (이전에는 hemisphere+ambientLightColor를 직접 계산 후 hairAmbientScale=0.25로 축소 적용했음)

                totalEmissiveRadiance += totalHairDirect;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + u
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
            reflectedLight.directDiffuse = vec3(0.0);
            reflectedLight.directSpecular = vec3(0.0);
            reflectedLight.indirectSpecular = vec3(0.0);`
    ), n || (l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 0.0;`
    ));
  }, t.customProgramCacheKey = () => e.blend ? "OZHairBlend" : i ? "OZHair_NoSec" : "OZHair", t.userData.hairUniforms = r, t;
}
function jp(a, e) {
  const t = a.clone();
  t.transparent = !0, t.depthWrite = !1, t.side = 2, t.alphaTest = 0, t.metalness = 0, t.roughness = 1, t.envMapIntensity = 0;
  const n = (r, o, l) => new re(r, o, l).convertSRGBToLinear(), i = e.uvTransform ?? {
    rotation: { value: 0 },
    scale: { value: 1.5 },
    offsetX: { value: 0 },
    offsetY: { value: 0 }
  }, s = {
    maskTintMap: { value: e.maskTintMap },
    tintColorR: e.tintColorRUniform ?? { value: e.tintColorR ?? n(0.957, 0.769, 0.725) },
    tintColorG: { value: e.tintColorG ?? n(0, 0, 0) },
    tintColorB: { value: e.tintColorB ?? n(0, 0, 0) },
    uvScaleYEyeBlink: e.uvScaleYEyeBlink ?? { value: 1 },
    uvRotation: i.rotation,
    uvScale: i.scale,
    uvOffsetX: i.offsetX,
    uvOffsetY: i.offsetY
  };
  return t.onBeforeCompile = (r) => {
    for (const [c, d] of Object.entries(s))
      r.uniforms[c] = d;
    const o = (
      /* glsl */
      `
            uniform sampler2D maskTintMap;
            uniform vec3 tintColorR;
            uniform vec3 tintColorG;
            uniform vec3 tintColorB;
            uniform float uvRotation;
            uniform float uvScale;
            uniform float uvOffsetX;
            uniform float uvOffsetY;
            uniform float uvScaleYEyeBlink;
        `
    );
    r.fragmentShader = r.fragmentShader.replace(
      "#include <common>",
      o + `
#include <common>`
    );
    const l = (
      /* glsl */
      `
            // ── UV Transform (Unity OZ_UV_Transform SubGraph) ──
            // 순서: offset → center → rotate → scale → uncenter
            vec2 _spriteUv = vMapUv;
            {
                // 1. Offset (이동한 위치가 회전 중심이 됨)
                vec2 shifted = _spriteUv + vec2(uvOffsetX, -uvOffsetY);
                vec2 centered = shifted - 0.5;
                // 2. Rotate
                float cosR = cos(uvRotation);
                float sinR = sin(uvRotation);
                vec2 rotated = vec2(
                    centered.x * cosR - centered.y * sinR,
                    centered.x * sinR + centered.y * cosR
                );
                // 3. Scale: Unity 공식 = rotated * (2 - Scale)
                //    Scale=1.5 → *0.5 → 텍스처 확대 (기본)
                //    Scale=1.0 → *1.0 → identity
                //    Scale=0.0 → *2.0 → 텍스처 축소
                // EyeBlink: Y 스케일 = _UV_Scale * _UV_Scale_Y_EyeBlink
                vec2 scaleVec = vec2(uvScale, uvScale * uvScaleYEyeBlink);
                rotated *= (2.0 - scaleVec);
                // 5. Uncenter
                _spriteUv = rotated + 0.5;
            }

            // ── map_fragment 대체: 변환된 UV로 디퓨즈 맵 샘플링 ──
            #ifdef USE_MAP
                vec4 sampledDiffuseColor = texture2D( map, _spriteUv );
                diffuseColor *= sampledDiffuseColor;
            #endif

            // ── 마스크 틴팅 + Hard Light 블렌딩 ──
            {
                vec4 mask = texture2D(maskTintMap, _spriteUv);

                vec3 tint = mask.r * tintColorR + mask.g * tintColorG + mask.b * tintColorB;

                // Hard Light blend
                vec3 base = diffuseColor.rgb;
                vec3 result1 = 1.0 - 2.0 * (1.0 - base) * (1.0 - tint);
                vec3 result2 = 2.0 * base * tint;
                vec3 zeroOrOne = step(tint, vec3(0.5));
                vec3 hardLight = result2 * zeroOrOne + (1.0 - zeroOrOne) * result1;

                diffuseColor.rgb = mix(base, hardLight, mask.a);
            }
        `
    );
    r.fragmentShader = r.fragmentShader.replace(
      "#include <map_fragment>",
      l
    ), r.fragmentShader = r.fragmentShader.replace(
      "#include <envmap_physical_pars_fragment>",
      `#include <envmap_physical_pars_fragment>
            #ifdef ENVMAP_TYPE_CUBE_UV
                #undef ENVMAP_TYPE_CUBE_UV
            #endif`
    ), r.fragmentShader = r.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
            reflectedLight.indirectDiffuse *= 0.25;`
    );
  }, t.customProgramCacheKey = () => "OZSpriteMaskTint", t.userData.eyeBlinkUniform = s.uvScaleYEyeBlink, t.userData.uvTransformUniforms = i, t.userData.uniforms = s, t;
}
function Xp(a, e) {
  const t = a.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (r, o, l) => new re(r, o, l).convertSRGBToLinear(), i = !!e.pbrMaskMap, s = {
    lensTopColor: { value: e.topColor ?? n(0, 0.017, 0.17) },
    lensBottomColor: { value: e.bottomColor ?? n(0, 0.096, 1) },
    lensGradientSmooth: { value: e.gradientSmooth ?? 0.15 },
    lensGradientPosition: { value: e.gradientPosition ?? 0.2 },
    lensSpecColor: { value: e.specularColor ?? n(0, 0.66, 0.76) },
    lensSpecIntensity: { value: e.specularIntensity ?? 1 },
    lensSpecPower: { value: e.specularPower ?? 20 },
    lensFresnelPower: { value: e.fresnelPower ?? 2 },
    lensLightScale: { value: e.lightScale ?? 1 },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 1 },
      smoothnessIntensity: { value: e.smoothness ?? 0.65 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (r) => {
    for (const [d, u] of Object.entries(s))
      r.uniforms[d] = u;
    const l = (
      /* glsl */
      `
            uniform vec3 lensTopColor;
            uniform vec3 lensBottomColor;
            uniform float lensGradientSmooth;
            uniform float lensGradientPosition;
            uniform vec3 lensSpecColor;
            uniform float lensSpecIntensity;
            uniform float lensSpecPower;
            uniform float lensFresnelPower;
            uniform float lensLightScale;
            ${i ? (
        /* glsl */
        `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
      ) : ""}
        `
    );
    r.fragmentShader = r.fragmentShader.replace(
      "#include <common>",
      l + `
#include <common>`
    );
    const c = (
      /* glsl */
      `
            {
                // PBR 마스크맵: R=Metallic, G=AO, B=LensArea, A=Smoothness(반전)
                ${i ? "vec4 lensMask = texture2D(pbrMaskMap, vMapUv);" : "vec4 lensMask = vec4(0.0, 1.0, 1.0, 0.0);"}
                float lensArea = lensMask.b;
                float lensAO = lensMask.g;

                // UV.y 기반 그라디언트 (TopColor=상단, BottomColor=하단)
                // GLB export 시 UV.y 반전 보정 (Unity UV.y=0→bottom, GLB UV.y=1→bottom)
                float lensUvY = 1.0 - vMapUv.y;
                float lensSub = lensGradientPosition - lensUvY;
                float lensT = smoothstep(0.0, lensGradientSmooth, lensSub);
                vec3 lensGradient = mix(lensTopColor, lensBottomColor, lensT);
                lensGradient *= lensArea * lensAO;

                // Blinn-Phong 스페큘러 (메인 디렉셔널 라이트)
                vec3 lV = normalize(vViewPosition);
                vec3 lN = normal;
                vec3 lSpecContrib = vec3(0.0);

                #if NUM_DIR_LIGHTS > 0
                {
                    vec3 lL = directionalLights[0].direction;
                    vec3 lLightColor = directionalLights[0].color * lensLightScale;
                    vec3 lH = normalize(lL + lV);
                    float lNdotH = clamp(dot(lN, lH), 0.0, 1.0);
                    float lSpec = pow(lNdotH, lensSpecPower);
                    lSpecContrib = lLightColor * lSpec * ${i ? "(1.0 - smoothnessIntensity)" : "0.35"};
                }
                #endif

                // 프레넬
                float lNdotV = clamp(dot(lN, lV), 0.0, 1.0);
                float lFresnel = pow(1.0 - lNdotV, lensFresnelPower);

                // 그라디언트 ↔ 하이라이트 블렌딩
                vec3 lSpecFresnel = lSpecContrib + vec3(lFresnel);
                vec3 lHighlight = lSpecFresnel * (lensSpecColor * lensSpecIntensity) * lensArea;
                diffuseColor.rgb = mix(lensGradient, lHighlight, lSpecFresnel);
            }
        `
    );
    r.fragmentShader = r.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      `#include <normal_fragment_maps>
` + c
    ), i && (r.fragmentShader = r.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>

                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
                `
    ), r.fragmentShader = r.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>

                {
                    // JPEG에 알파 채널 없음 → smoothnessIntensity를 직접 사용
                    roughnessFactor = 1.0 - smoothnessIntensity;
                }
                `
    ), r.fragmentShader = r.fragmentShader.replace(
      "#include <aomap_fragment>",
      `#include <aomap_fragment>

                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
                `
    )), r.fragmentShader = r.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 0.0;`
    );
  }, t.customProgramCacheKey = () => i ? "OZLens_PBR" : "OZLens", t.userData.uniforms = s, t;
}
function qp(a, e) {
  var r, o;
  const t = a.clone();
  t.alphaTest = 0, t.aoMap = null, t.emissive.set(0, 0, 0), t.emissiveMap = null, t.emissiveIntensity = 1;
  const n = { value: 0 }, i = !!e.pbrMaskMap, s = {
    emissiveBlinkMap: { value: e.emissiveMap },
    emissiveStrength: { value: e.emissiveStrength ?? 1 },
    blinkSpeed: { value: e.blinkSpeed ?? 3 },
    mapTiling: { value: new De(((r = e.mapTiling) == null ? void 0 : r[0]) ?? 2, ((o = e.mapTiling) == null ? void 0 : o[1]) ?? 4) },
    uBlinkTime: n,
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (l) => {
    for (const [h, f] of Object.entries(s))
      l.uniforms[h] = f;
    const d = (
      /* glsl */
      `
            uniform sampler2D emissiveBlinkMap;
            uniform float emissiveStrength;
            uniform float blinkSpeed;
            uniform vec2 mapTiling;
            uniform float uBlinkTime;
            ${i ? (
        /* glsl */
        `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
      ) : ""}

            // Unity Hash_Tchou_2_1 포팅 (deterministic hash)
            float hashTchou21(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            // Unity SimpleNoise_ValueNoise_Deterministic 포팅
            float valueNoise(vec2 uv) {
                vec2 i = floor(uv);
                vec2 f = fract(uv);
                f = f * f * (3.0 - 2.0 * f);
                float r0 = hashTchou21(i + vec2(0.0, 0.0));
                float r1 = hashTchou21(i + vec2(1.0, 0.0));
                float r2 = hashTchou21(i + vec2(0.0, 1.0));
                float r3 = hashTchou21(i + vec2(1.0, 1.0));
                float bot = mix(r0, r1, f.x);
                float top = mix(r2, r3, f.x);
                return mix(bot, top, f.y);
            }

            // Unity SimpleNoise_Deterministic (3 octaves)
            float simpleNoise(vec2 uv, float scale) {
                float out_ = 0.0;
                out_ += valueNoise(uv * scale) * 0.125;
                out_ += valueNoise(uv * (scale / 2.0)) * 0.25;
                out_ += valueNoise(uv * (scale / 4.0)) * 0.5;
                return out_;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      d + `
#include <common>`
    );
    const u = (
      /* glsl */
      `
            {
                vec3 eSample = texture2D(emissiveBlinkMap, vMapUv).rgb;
                vec3 emissive = eSample * emissiveStrength;

                // 포스터라이즈 UV → 셀별 노이즈
                vec2 posterized = floor(vMapUv / (1.0 / mapTiling)) * (1.0 / mapTiling);
                float noise = simpleNoise(posterized, 500.0);

                // 블링크: frac(noise * time * speed) >= 0.2
                float phase = fract(noise * uBlinkTime * blinkSpeed);
                float isOn = step(0.2, phase);

                totalEmissiveRadiance += emissive * isOn;

                // emissive ON → PBR 라이팅 억제 (diffuseColor=0이면 lights 계산 결과 ~0)
                // 이래야 bloom이 emissive 색상을 유지함 (흰색으로 날아가지 않음)
                diffuseColor.rgb *= (1.0 - isOn);
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + u
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 1.0;`
    ), i && (l.fragmentShader = l.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = pbrMask2.a * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <aomap_fragment>",
      `#include <aomap_fragment>
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }`
    ));
  }, t.customProgramCacheKey = () => i ? "OZEmissiveBlink_PBR" : "OZEmissiveBlink", t.userData.uniforms = s, { material: t, timeUniform: n };
}
const Ye = class Ye {
  constructor(e, t) {
    this.onProgress = null, this.gltfLoader = new ap().setMeshoptDecoder(Gp), this.textureLoader = new da(), this.boneMap = /* @__PURE__ */ new Map(), this.baseArmature = null, this.avatarRoot = new dn(), this.activeParts = /* @__PURE__ */ new Map(), this.isLoaded = !1, this.currentAvatarData = null, this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.currentBlendShapes = [], this.volumeMaskEnabled = !1, this.debugSpheres = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this._resourceSizes = /* @__PURE__ */ new Map(), this._partResources = /* @__PURE__ */ new Map(), this._decalTextures = [], this._hiResQueue = /* @__PURE__ */ new Map(), this.skinColorUniform = { value: new re(0.957, 0.769, 0.725).convertSRGBToLinear() }, this.uvTransforms = /* @__PURE__ */ new Map(), this.eyeBlinkUniform = { value: 1 }, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = 0, this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending = !1, this.decalsBaseUrl = "avatar/decals/", this.decalsMetadata = null, this.decalsMetadataPromise = null, this.partsMetadata = null, this.partsMetadataPromise = null, this.activeDecalProjectors = /* @__PURE__ */ new Map(), this.decalCategorySlots = /* @__PURE__ */ new Map(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.swapSeq = /* @__PURE__ */ new Map(), this.baseSkeletonGlb = "avatar/skeleton/Msh_Ava_Bip.glb", this.animBaseUrl = "avatar/animations/", this.partsBaseUrl = "avatar/parts/", this.masksBaseUrl = "avatar/masks/", this.defaultPresetJson = '{"PresetPartsDatas":[{"Category":0,"ID":"Ava_H_008","Color":{"colors":[{"r":0.878,"g":0.369,"b":0.043,"a":1.0},{"r":0.8,"g":0.455,"b":0.29,"a":1.0}]}},{"Category":1,"ID":"Ava_F_001","Color":{"colors":[{"r":0.949,"g":0.875,"b":0.863,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":2,"ID":"Ava_B_001","Color":{"colors":[{"r":0.192,"g":0.129,"b":0.075,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":3,"ID":"Ava_E_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":4,"ID":"Ava_N_001","Color":{"colors":[]}},{"Category":5,"ID":"Ava_M_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":6,"ID":"Ava_U_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":7,"ID":"Ava_L_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":9,"ID":"Ava_S_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}}],"blendShapes":[],"PresetName":"UserPreset"}', this.mixer = null, this.animClips = /* @__PURE__ */ new Map(), this.currentAction = null, this.defaultAction = null, this.poseAction = null, this.prevMotionIndex = -1, this.defaultIdleName = "Ani_Idle_001_Idle", this.idleAnimations = [
      "Ani_Idle_002_Hi",
      "Ani_Idle_003_Leg",
      "Ani_Idle_004_Stretch"
    ], this._eyeBlinkPaused = !1, this._hairShiftDir = 1, this._hairNormalScale = 1, this._maxConcurrent = 0, this._activeFetches = 0, this._fetchQueue = [], this.scene = e, this.baseUrl = (t == null ? void 0 : t.baseUrl) ?? "", this.onProgress = (t == null ? void 0 : t.onProgress) ?? null, this.scene.add(this.avatarRoot);
  }
  /** 기본 프리셋으로 아바타 로드 */
  async start() {
    if (this.defaultPresetJson) {
      const e = JSON.parse(this.defaultPresetJson);
      await this.loadAvatarFromData(e);
    }
  }
  /** 매 프레임 호출 */
  update(e) {
    this.mixer && this.mixer.update(e);
    for (const t of this.blinkTimeUniforms)
      t.value += e;
    this.updateEyeBlink(e), this.updateVolumeMaskCenters(), this.updateDecalProjections();
  }
  getAvatarRoot() {
    return this.avatarRoot;
  }
  getBone(e) {
    return this.boneMap.get(e);
  }
  /** 눈 깜빡임 일시 정지/재개 (프로필 캡쳐용) */
  setEyeBlinkPaused(e) {
    e && (this.eyeBlinkUniform.value = 1, this.eyeBlinkElapsed = -1), this._eyeBlinkPaused = e;
  }
  /** 프로필 캡쳐용: idle 프레임 0으로 강제 설정. 반환값으로 복원 함수 제공 */
  forceIdlePose() {
    var i;
    if (!this.mixer || !this.defaultAction) return null;
    const e = this.currentAction, t = ((i = this.currentAction) == null ? void 0 : i.time) ?? 0, n = this.mixer.timeScale;
    return this.mixer.stopAllAction(), this.defaultAction.reset(), this.defaultAction.time = 0, this.defaultAction.play(), this.mixer.timeScale = 0, this.mixer.update(0), this.avatarRoot.updateMatrixWorld(!0), () => {
      this.mixer.timeScale = n, this.mixer.stopAllAction(), e && (e.reset(), e.time = t, e.play()), this.currentAction = e, this.mixer.update(0);
    };
  }
  /** 모든 헤어 머티리얼의 hairShiftDir uniform 값 변경 */
  setHairShiftDirection(e) {
    this._hairShiftDir = e, this.avatarRoot.traverse((t) => {
      var i, s;
      if (!t.isMesh) return;
      const n = Array.isArray(t.material) ? t.material : [t.material];
      for (const r of n) {
        const o = (s = (i = r.userData) == null ? void 0 : i.hairUniforms) == null ? void 0 : s.hairShiftDir;
        o && (o.value = e);
      }
    });
  }
  /** 모든 헤어 머티리얼의 normalScale 변경 */
  setHairNormalScale(e) {
    this._hairNormalScale = e, this.avatarRoot.traverse((t) => {
      var i;
      if (!t.isMesh) return;
      const n = Array.isArray(t.material) ? t.material : [t.material];
      for (const s of n)
        (i = s.userData) != null && i.hairUniforms && s.normalScale && s.normalScale.set(e, e);
    });
  }
  /** 헤어 uniform 일괄 변경 헬퍼 */
  setHairUniform(e, t) {
    this.avatarRoot.traverse((n) => {
      var s, r;
      if (!n.isMesh) return;
      const i = Array.isArray(n.material) ? n.material : [n.material];
      for (const o of i) {
        const l = (r = (s = o.userData) == null ? void 0 : s.hairUniforms) == null ? void 0 : r[e];
        l && (l.value = t);
      }
    });
  }
  setHairSpecIntensity(e) {
    this.setHairUniform("hairSpecIntensity", e);
  }
  setHairGeomNormalTBN(e) {
    this.setHairUniform("hairGeomNormalTBN", e);
  }
  setHairGaussianSpec(e) {
    this.setHairUniform("hairGaussianSpec", e);
  }
  setHairSpecAAScale(e) {
    this.setHairUniform("hairSpecAAScale", e);
  }
  /** 특정 파츠의 머티리얼 속성을 런타임 수정 */
  setMaterialProperty(e, t, n, i) {
    for (const [, s] of this.activeParts)
      for (const r of s)
        r.traverse((o) => {
          var d, u, h;
          if (!o.isMesh) return;
          const l = o, c = Array.isArray(l.material) ? l.material : [l.material];
          for (const f of c) {
            if (f.name !== t) continue;
            const g = (d = f.userData) == null ? void 0 : d.hairUniforms;
            if (g) {
              if (n === "_BumpScale") {
                (u = f.normalScale) == null || u.set(i, i);
                return;
              }
              const p = Ye.HAIR_PROP_MAP[n];
              if (p && g[p]) {
                g[p].value = i;
                return;
              }
            }
            const _ = (h = f.userData) == null ? void 0 : h.uniforms;
            if (_) {
              const p = Ye.PROP_UNIFORM_MAP[n];
              if (p && _[p]) {
                _[p].value = i;
                return;
              }
            }
            f.userData[n] = i;
          }
        });
  }
  /** 볼륨 마스크 활성화/비활성화 — 모든 활성 머티리얼의 volumeMaskEnable uniform 토글 */
  setVolumeMask(e) {
    var t, n;
    this.volumeMaskEnabled = e, this.volumeMaskTargets = [];
    for (const i of this.debugSpheres)
      i.removeFromParent(), (t = i.geometry) == null || t.dispose(), (n = i.material) == null || n.dispose();
    this.debugSpheres = [];
    for (const [, i] of this.activeParts)
      for (const s of i)
        s.traverse((r) => {
          var d, u, h, f, g;
          if (!r.isMesh) return;
          const o = r, l = o.material, c = Array.isArray(l) ? l : [l];
          for (const _ of c) {
            const p = !!((d = _.userData) != null && d.hasExplicitVolumeMask), m = e && p ? 1 : 0, x = (u = _.userData) == null ? void 0 : u.hairUniforms;
            x != null && x.volumeMaskEnable && (x.volumeMaskEnable.value = m, e && p && ((h = _.userData) != null && h.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: x,
              rawCenter: _.userData.rawMaskCenterUnity,
              mesh: o
            }));
            const v = (f = _.userData) == null ? void 0 : f.uniforms;
            v != null && v.volumeMaskEnable && (v.volumeMaskEnable.value = m, e && p && ((g = _.userData) != null && g.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: v,
              rawCenter: _.userData.rawMaskCenterUnity,
              mesh: o
            }));
          }
        });
    e && this.updateVolumeMaskCenters();
  }
  getIsLoaded() {
    return this.isLoaded;
  }
  getCurrentData() {
    return this.currentAvatarData;
  }
  getResourceInfo() {
    const e = Array.from(this._partResources.values()), t = this.resolve(this.baseSkeletonGlb), n = this._resourceSizes.get(t) ?? 0;
    n > 0 && e.unshift({
      partId: "Msh_Ava_Bip",
      category: -1,
      categoryName: "Skeleton",
      isEx: !1,
      glbUrl: t,
      glbSize: n,
      embeddedTextures: [],
      externalTextures: [],
      meshes: [],
      materials: []
    });
    let i = 0;
    for (const [s, r] of this._resourceSizes)
      s.includes("Ava_D_") && s.endsWith(".glb") && (i += r);
    return (this._decalTextures.length > 0 || i > 0) && e.push({
      partId: "Decals",
      category: -2,
      categoryName: "Decal",
      isEx: !1,
      glbUrl: "",
      glbSize: i,
      embeddedTextures: [],
      externalTextures: this._decalTextures,
      meshes: [],
      materials: []
    }), e;
  }
  getTotalResourceSize() {
    let e = 0;
    for (const t of this.getResourceInfo()) {
      e += t.glbSize;
      for (const n of t.externalTextures) e += n.size;
    }
    return e;
  }
  /** 개별 파츠 교체 (전체 리로드 없이) */
  async swapPart(e, t, n, i) {
    var u;
    const s = (this.swapSeq.get(e) ?? 0) + 1;
    this.swapSeq.set(e, s);
    const r = {
      Category: e,
      ID: t,
      Color: n ? { colors: n } : void 0
    };
    if (!t || t === "") {
      if (Ye.isDecalCategory(e)) {
        if (this.removeDecalCategory(e), this.currentAvatarData) {
          const p = this.currentAvatarData.PresetPartsDatas.findIndex((m) => m.Category === e);
          p >= 0 && this.currentAvatarData.PresetPartsDatas.splice(p, 1);
        }
        return;
      }
      const h = r.Category.toString(), f = this.activeParts.get(h);
      if (f) {
        for (const p of f)
          this.avatarRoot.remove(p), this.disposeMeshes(p);
        this.activeParts.delete(h);
      }
      this._partResources.delete(h);
      const g = `${r.Category}_Ex`, _ = this.activeParts.get(g);
      if (_) {
        for (const p of _)
          this.avatarRoot.remove(p), this.disposeMeshes(p);
        this.activeParts.delete(g);
      }
      if (this._partResources.delete(g), e === 8 && (this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup), this.capMountGroup = null), this.capUseDefaultMount = !1, this.hairCapMountBone = "", this.updateHairCapVisibility(), this.setVolumeMask(!1)), e === 0 && (this.hairCapMountBone = "", this.updateHairCapVisibility(), this.capMountGroup)) {
        const p = this.boneMap.get("Mount_HairCap_001");
        p && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.copy(p.scale), p.add(this.capMountGroup));
      }
      if (this.currentAvatarData) {
        const p = this.currentAvatarData.PresetPartsDatas.findIndex((m) => m.Category === e);
        p >= 0 && this.currentAvatarData.PresetPartsDatas.splice(p, 1);
      }
      return;
    }
    if (this.currentAvatarData) {
      const h = this.currentAvatarData.PresetPartsDatas.findIndex((f) => f.Category === e);
      h >= 0 ? this.currentAvatarData.PresetPartsDatas[h] = r : this.currentAvatarData.PresetPartsDatas.push(r);
    }
    if (e === 1 && this.getSkinColor(), Ye.isDecalCategory(e)) {
      await this.loadDecalPart(e, t, n, i == null ? void 0 : i.applySubColorToEx);
      return;
    }
    if (e === 17) {
      if (i != null && i.animationTrigger ? await this.playPose(i.animationTrigger) : console.warn("[Pose] animationTrigger가 없음 — options:", i), this.currentAvatarData) {
        const h = this.currentAvatarData.PresetPartsDatas.findIndex((f) => f.Category === e);
        h >= 0 ? this.currentAvatarData.PresetPartsDatas[h] = r : this.currentAvatarData.PresetPartsDatas.push(r);
      }
      return;
    }
    if (e === 4) {
      if (i != null && i.blendShapes && i.blendShapes.length > 0) {
        const h = /* @__PURE__ */ new Map();
        for (const g of this.currentBlendShapes) h.set(g.type, g.value);
        for (const g of i.blendShapes) h.set(g.type, g.value);
        const f = Array.from(h, ([g, _]) => ({ type: g, value: _ }));
        this.setBlendShapes(f);
      }
      if (this.currentAvatarData) {
        const h = this.currentAvatarData.PresetPartsDatas.findIndex((f) => f.Category === e);
        h >= 0 ? this.currentAvatarData.PresetPartsDatas[h] = r : this.currentAvatarData.PresetPartsDatas.push(r);
      }
      return;
    }
    e === 8 && (this.capUseDefaultMount = !!(i != null && i.useDefaultHairCapMount)), e === 0 && (this.hairCapMountBone = (i == null ? void 0 : i.capMountBone) ?? "");
    const o = this.volumeMaskEnabled && (e === 0 || e === 11), l = (u = this.partsMetadata) == null ? void 0 : u[t], c = l == null ? void 0 : l.files;
    try {
      await this.loadAndAttachPart(r, !1, s, c);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) !== s) return;
    const d = (h) => {
      if (!o) return;
      const f = r.Category.toString(), g = `${r.Category}_Ex`;
      for (const _ of [f, g]) {
        const p = this.activeParts.get(_);
        if (p) for (const m of p) m.visible = !h;
      }
    };
    d(!0);
    try {
      await this.loadAndAttachPart(r, !0, s, c);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) === s) {
      if (d(!0), (e === 8 || e === 0) && this.updateHairCapVisibility(), e === 8 && this.setVolumeMask(!!(i != null && i.useVolumeMask)), this.volumeMaskEnabled && (e === 0 || e === 11 || e === 1) && this.setVolumeMask(!0), d(!1), e === 1 && this.activeDecalProjectors.size > 0 && this.reorderDecalSlots(), e === 0 && this.capMountGroup) {
        const h = this.getCapMountBone();
        h && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.copy(h.scale), h.add(this.capMountGroup));
      }
      if (this.currentBlendShapes.length > 0 && this.applyBlendShapes(this.currentBlendShapes), i != null && i.blendShapes && i.blendShapes.length > 0) {
        const h = /* @__PURE__ */ new Map();
        for (const g of this.currentBlendShapes) h.set(g.type, g.value);
        for (const g of i.blendShapes) h.set(g.type, g.value);
        const f = Array.from(h, ([g, _]) => ({ type: g, value: _ }));
        this.setBlendShapes(f);
      }
      this.loadHiResTextures();
    }
  }
  /** Pose 애니메이션 재생 (trigger 이름으로 매칭, LoopRepeat) */
  async playPose(e) {
    if (!this.mixer) return;
    const t = Ye.POSE_ANIM_MAP[e];
    if (t !== void 0) {
      if (t === "") {
        this.poseAction = null, this.fadeToDefault();
        return;
      }
      await this.playAnimationByName(t, !0), this.poseAction = this.currentAction;
    }
  }
  /** 랜덤 아이들 애니메이션 재생 */
  async playRandomAnimation() {
    if (!this.mixer || this.idleAnimations.length === 0) return;
    let e = Math.floor(Math.random() * this.idleAnimations.length), t = 0;
    for (; e === this.prevMotionIndex && t < 10; )
      e = Math.floor(Math.random() * this.idleAnimations.length), t++;
    this.prevMotionIndex = e, await this.playAnimationByName(this.idleAnimations[e]);
  }
  /** JSON 데이터로 아바타 로드 */
  async loadAvatarFromData(e) {
    var d, u;
    this.currentAvatarData = e, this.clearAvatar(), (d = this.onProgress) == null || d.call(this, 0), this.getSkinColor(), performance.now(), performance.now();
    try {
      await this.loadBaseSkeleton();
    } catch (h) {
      console.error("[AvatarViewer] 스켈레톤 로드 실패:", h);
    }
    if (this.boneMap.size === 0) {
      console.error("[AvatarViewer] 본 노드 없음");
      return;
    }
    this.avatarRoot.updateMatrixWorld(!0), performance.now();
    const t = await this.loadPartsMetadata(), n = [], i = [];
    let s = null, r = null;
    for (const h of e.PresetPartsDatas)
      if (!(!h.ID || h.ID === "")) {
        if (h.Category === 17) {
          r = h;
          continue;
        }
        if (Ye.isDecalCategory(h.Category))
          n.push(h);
        else if (h.Category === 8)
          s = h;
        else {
          if (h.Category === 0) {
            const f = t[h.ID];
            this.hairCapMountBone = (f == null ? void 0 : f.capMountBone) ?? "";
          }
          i.push(h);
        }
      }
    const o = i.reduce((h, f) => {
      var _;
      const g = (_ = t[f.ID]) == null ? void 0 : _.files;
      return h + ((g == null ? void 0 : g.glb) !== !1 ? 1 : 0) + ((g == null ? void 0 : g.ex) !== !1 ? 1 : 0);
    }, 0) + (s ? 1 : 0);
    let l = 0;
    const c = () => {
      var h;
      l++, (h = this.onProgress) == null || h.call(this, 50 + l / Math.max(1, o) * 50);
    };
    if (await Promise.all(i.map(async (h) => {
      var g;
      const f = (g = t[h.ID]) == null ? void 0 : g.files;
      if ((f == null ? void 0 : f.glb) !== !1) {
        performance.now();
        try {
          await this.loadAndAttachPart(h, !1, void 0, f);
        } catch (_) {
          console.warn(`[AvatarViewer] 파츠 로드 실패: ${h.ID}`, _);
        }
        c();
      }
      if ((f == null ? void 0 : f.ex) !== !1) {
        performance.now();
        try {
          await this.loadAndAttachPart(h, !0, void 0, f);
        } catch {
        }
        c();
      }
    })), s) {
      const h = t[s.ID];
      this.capUseDefaultMount = !!(h != null && h.useDefaultHairCapMount), performance.now();
      try {
        await this.loadAndAttachPart(s, !1, void 0, h == null ? void 0 : h.files);
      } catch (f) {
        console.warn(`[AvatarViewer] Cap 로드 실패: ${s.ID}`, f);
      }
      c(), this.updateHairCapVisibility(), h != null && h.useVolumeMask && this.setVolumeMask(!0);
    }
    if (n.length > 0) {
      performance.now();
      for (const h of n)
        try {
          const f = t[h.ID];
          await this.loadDecalPart(h.Category, h.ID, (u = h.Color) == null ? void 0 : u.colors, !!(f != null && f.applySubColorToEx));
        } catch (f) {
          console.warn(`[Decal] 로드 실패: ${h.ID}`, f);
        }
    }
    if (performance.now(), e.blendShapes && this.applyBlendShapes(e.blendShapes), this.updateHairCapVisibility(), this.resetEyeBlink(), this.avatarRoot.traverse((h) => {
      h.isMesh && (h.frustumCulled = !1);
    }), performance.now(), this.animClips.size > 0 && this.initializeAnimation(), r) {
      const h = t[r.ID], f = (h == null ? void 0 : h.animationTrigger) ?? r.AnimationTrigger;
      f && await this.playPose(f);
    }
    this.isLoaded = !0, this.loadHiResTextures();
    for (const h of this.idleAnimations)
      this.loadAnimationClip(h);
  }
  /** @2x 고해상도 텍스처 백그라운드 로드 → 교체 */
  async loadHiResTextures() {
    if (this._hiResQueue.size === 0) return;
    const e = new da(), t = (i) => new Promise((s) => {
      e.load(i, s, void 0, () => s(null));
    }), n = Array.from(this._hiResQueue.entries());
    this._hiResQueue.clear();
    for (const [, i] of n)
      for (const s of i) {
        const r = await t(s.url);
        r && (r.colorSpace = dt, r.flipY = !1, s.uniform ? s.uniform.value = r : s.material && s.prop && (s.material[s.prop] = r, s.material.needsUpdate = !0));
      }
  }
  clearAvatar() {
    this._hiResQueue.clear(), this.mixer && (this.mixer.stopAllAction(), this.mixer = null), this.currentAction = null, this.defaultAction = null, this.poseAction = null;
    for (const [, e] of this.activeParts)
      for (const t of e)
        this.avatarRoot.remove(t), this.disposeMeshes(t);
    this.activeParts.clear(), this.baseArmature && (this.avatarRoot.remove(this.baseArmature), this.baseArmature = null, this.boneMap.clear()), this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.currentBlendShapes = [], this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.uvTransforms.clear(), this._partResources.clear(), this._resourceSizes.clear(), this._decalTextures = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this.clearAllDecals(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.resetEyeBlink(), this.isLoaded = !1;
  }
  //#region Private
  resolve(e) {
    return this.baseUrl + e;
  }
  async loadBaseSkeleton() {
    performance.now();
    const e = this.resolve(this.baseSkeletonGlb), t = await this._fetchWithStream(e, (s) => {
      var r;
      (r = this.onProgress) == null || r.call(this, s * 50);
    });
    this._resourceSizes.set(e, t.byteLength);
    const n = await new Promise((s, r) => {
      this.gltfLoader.parse(t, "", s, r);
    });
    performance.now(), this.baseArmature = n.scene, this.avatarRoot.add(this.baseArmature), this.boneMap.clear();
    const i = n.scene.getObjectByName("Bip001");
    if (i && i.traverse((s) => {
      s.name && this.boneMap.set(s.name, s);
    }), n.animations && n.animations.length > 0) {
      this.animClips.clear();
      for (const s of n.animations)
        this.animClips.has(s.name) || this.animClips.set(s.name, s);
    }
  }
  async loadAndAttachPart(e, t = !1, n, i) {
    var se, H, Z, _e, ae;
    const s = e.ID, r = t ? "_Ex" : "", o = i ?? {};
    if (t && o.ex === !1 || !t && o.glb === !1) return;
    const l = this.resolve(`${this.partsBaseUrl}${s}${r}.glb`), c = t ? `${e.Category}_Ex` : e.Category.toString(), u = [
      1,
      6,
      7,
      9,
      10,
      8
      /* Cap */
    ].includes(e.Category) && !t;
    let h = null, f = null, g = null;
    const p = [
      3,
      2,
      5
      /* Mouth */
    ].includes(e.Category);
    let m = null;
    const x = (e.Category === 0 || e.Category === 11) && !t;
    let v = null, T = null;
    const E = (Q) => this.loadTexture(Q).catch(() => null), R = (async () => {
      if (u) {
        performance.now();
        const [Q, ee, he, de] = await Promise.all([
          o.mask1 ? E(this.resolve(`${this.masksBaseUrl}${s}_mask1.${o.mask1}`)) : Promise.resolve(null),
          o.mask2 ? E(this.resolve(`${this.masksBaseUrl}${s}_mask2.${o.mask2}`)) : Promise.resolve(null),
          o.pbr ? E(this.resolve(`${this.masksBaseUrl}${s}_pbr.${o.pbr}`)) : Promise.resolve(null),
          o.emissive ? E(this.resolve(`${this.masksBaseUrl}${s}_emissive.${o.emissive}`)) : Promise.resolve(null)
        ]);
        Q && ee ? h = { mask1: Q, mask2: ee, pbr: he ?? void 0 } : Q && (f = { mask: Q, pbr: he ?? void 0 }), g = de;
      } else if (p) {
        const Q = t ? o.exMask1 : o.mask1;
        Q && (performance.now(), m = await E(
          this.resolve(`${this.masksBaseUrl}${s}${r}_mask1.${Q}`)
        ));
      } else if (x) {
        performance.now();
        const [Q, ee] = await Promise.all([
          o.mask ? E(this.resolve(`${this.masksBaseUrl}${s}_mask.${o.mask}`)) : Promise.resolve(null),
          o.normal ? E(this.resolve(`${this.masksBaseUrl}${s}_normal.${o.normal}`)) : Promise.resolve(null)
        ]);
        v = Q, T = ee, Q || console.warn(`[AvatarViewer] 헤어 마스크 텍스처 로드 실패: ${s}`);
      }
    })(), w = (async () => {
      const Q = await this.fetchWithProgress(l);
      return this._resourceSizes.set(l, Q.byteLength), new Promise((ee, he) => {
        this.gltfLoader.parse(Q, "", ee, he);
      });
    })(), [D] = await Promise.all([w, R]);
    if (n !== void 0 && this.swapSeq.get(e.Category) !== n) return;
    const Y = ["Hair", "FaceType", "EyeBrow", "Eye", "Nose", "Mouth", "Upper", "Lower", "Cap", "Shoes", "Glasses", "Whiskers"], b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), B = (se = D.parser) == null ? void 0 : se.json;
    if (B != null && B.images) {
      const Q = B.images.map((he) => {
        var de, ve;
        return he.bufferView != null ? ((ve = (de = B.bufferViews) == null ? void 0 : de[he.bufferView]) == null ? void 0 : ve.byteLength) ?? 0 : 0;
      }), ee = (H = D.parser) == null ? void 0 : H.associations;
      if (ee) {
        for (const [he, de] of ee)
          if ((de == null ? void 0 : de.textures) !== void 0 && (he != null && he.isTexture)) {
            const ve = (_e = (Z = B.textures) == null ? void 0 : Z[de.textures]) == null ? void 0 : _e.source;
            if (ve !== void 0) {
              b.set(he, Q[ve] ?? 0);
              const C = ((ae = B.images[ve]) == null ? void 0 : ae.mimeType) ?? "";
              y.set(he, C);
            }
          }
      }
    }
    const G = /* @__PURE__ */ new Set(), V = [], j = [], O = [], K = /* @__PURE__ */ new Set();
    D.scene.traverse((Q) => {
      if (!Q.isMesh) return;
      const ee = Q, he = ee.geometry, de = Array.isArray(ee.material) ? ee.material : [ee.material], ve = [];
      for (const Pe of de) {
        const Ee = Pe.name || "unnamed";
        if (ve.push(Ee), !K.has(Ee)) {
          K.add(Ee);
          const Be = {};
          for (const [Re, A] of Object.entries(Pe.userData))
            typeof A == "number" && (Be[Re] = A);
          Object.keys(Be).length > 0 && O.push({ materialName: Ee, properties: Be });
        }
        if (Pe instanceof hn) {
          const Be = [
            ["map", Pe.map],
            ["normalMap", Pe.normalMap],
            ["aoMap", Pe.aoMap],
            ["emissiveMap", Pe.emissiveMap],
            ["roughnessMap", Pe.roughnessMap],
            ["metalnessMap", Pe.metalnessMap]
          ];
          for (const [Re, A] of Be)
            if (A && !G.has(A)) {
              G.add(A);
              const M = A.image, N = y.get(A) ?? "", X = N === "image/jpeg" ? ".jpg" : N === "image/png" ? ".png" : "";
              V.push({
                type: Re,
                name: (A.name || "") + X,
                url: "",
                size: b.get(A) ?? 0,
                texture: A,
                width: (M == null ? void 0 : M.width) ?? 0,
                height: (M == null ? void 0 : M.height) ?? 0
              });
            }
        }
      }
      const C = he.getAttribute("position"), st = C ? C.count : 0, Ce = he.index ? he.index.count : st;
      j.push({
        name: ee.name || "unnamed",
        vertexCount: st,
        triangleCount: Math.floor(Ce / 3),
        materialNames: ve
      });
    });
    const z = [], ie = (Q, ee, he) => {
      if (!ee) return;
      const de = this.resolve(`${this.masksBaseUrl}${s}${he}`), ve = ee.image, C = de.split("/").pop() || "";
      z.push({
        type: Q,
        name: C,
        url: de,
        size: this._resourceSizes.get(de) ?? 0,
        texture: ee,
        width: (ve == null ? void 0 : ve.width) ?? 0,
        height: (ve == null ? void 0 : ve.height) ?? 0
      });
    };
    if (h) {
      const Q = h;
      ie("mask1", Q.mask1, `_mask1.${o.mask1 || "png"}`), ie("mask2", Q.mask2, `_mask2.${o.mask2 || "png"}`), ie("pbr", Q.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (f) {
      const Q = f;
      ie("mask", Q.mask, `_mask1.${o.mask1 || "png"}`), ie("pbr", Q.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (g && ie("emissive", g, `_emissive.${o.emissive || "png"}`), m && ie("mask1", m, `${r}_mask1.${(t ? o.exMask1 : o.mask1) || "png"}`), v && ie("mask", v, `_mask.${o.mask || "png"}`), T && ie("normal", T, `_normal.${o.normal || "png"}`), this._partResources.set(c, {
      partId: s + r,
      category: e.Category,
      categoryName: Y[e.Category] ?? `Cat${e.Category}`,
      isEx: t,
      glbUrl: l,
      glbSize: this._resourceSizes.get(l) ?? 0,
      embeddedTextures: V,
      externalTextures: z,
      meshes: j,
      materials: O
    }), e.Category === 0 && !t) {
      const Q = this.isCapActive();
      let ee = null, he = null;
      D.scene.traverse((de) => {
        de.name.endsWith("_Cap") ? (he = de, de.visible = Q) : de.isSkinnedMesh && !ee && (ee = de, de.visible = !Q);
      }), ee && he ? this.hairNodes = { normal: ee, cap: he } : this.hairNodes = null;
    }
    const ce = e.Category === 8 && !t, ge = ce ? this.getCapMountBone() : null;
    if (D.scene.traverse((Q) => {
      var ee, he, de, ve, C, st;
      if (Q.isSkinnedMesh) {
        const Ce = Q;
        ce || this.rebindToBaseSkeleton(Ce);
        const Pe = Ce.material.name;
        if (Pe != null && Pe.endsWith("_Lens")) {
          this.applyLensMaterial(Ce, (ee = e.Color) == null ? void 0 : ee.colors);
          return;
        }
        if (Pe != null && Pe.endsWith("_Lamp")) {
          if (g) {
            const Ee = Ce.material, Be = Ee.userData, Re = (h == null ? void 0 : h.pbr) ?? (f == null ? void 0 : f.pbr), { material: A, timeUniform: M } = qp(Ee, {
              emissiveMap: g,
              emissiveStrength: Be._Emissive_Strangth ?? 10,
              blinkSpeed: Be._Blink_Speed ?? 0.5,
              mapTiling: [Be._Map_Tiling_X ?? 2, Be._Map_Tiling_Y ?? 4],
              pbrMaskMap: Re ?? void 0,
              metallicIntensity: Be._MetallicIntensity,
              smoothness: Be._Smoothness,
              aoIntensity: Be._AOIntensity
            });
            Ce.material = A, this.blinkTimeUniforms.push(M);
          }
          return;
        }
        if (m)
          this.applySpriteMaskTintMaterial(Ce, m, (he = e.Color) == null ? void 0 : he.colors, e.Category, t);
        else if (x) {
          const Ee = Ce.material, Be = v ?? Ee.aoMap;
          Be && this.applyHairMaterial(Ce, Be, (de = e.Color) == null ? void 0 : de.colors, T);
        } else h ? this.applyMask2TintMaterial(Ce, h, (ve = e.Color) == null ? void 0 : ve.colors, g) : f ? this.applyMaskTintMaterial(Ce, f, e.Category, (C = e.Color) == null ? void 0 : C.colors) : (st = e.Color) != null && st.colors && this.applyColorsToMesh(Ce, e.Category, e.Color.colors);
      }
    }), ce && ge) {
      this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup));
      const Q = new dn();
      D.scene.updateMatrixWorld(!0);
      const ee = D.scene.matrixWorld.clone().invert();
      D.scene.traverse((de) => {
        if (de.isSkinnedMesh) {
          const ve = de, C = new bt(ve.geometry, ve.material);
          C.name = ve.name, C.frustumCulled = !1, ee.clone().multiply(ve.matrixWorld).decompose(C.position, C.quaternion, C.scale), Q.add(C);
        }
      }), Q.scale.copy(ge.scale), ge.add(Q), this.capMountGroup = Q;
      const he = this.activeParts.get(c);
      if (he)
        for (const de of he)
          de.removeFromParent(), this.disposeMeshes(de);
      this.activeParts.set(c, [Q]);
    } else {
      this.avatarRoot.add(D.scene);
      const Q = this.activeParts.get(c);
      if (Q)
        for (const ee of Q)
          this.avatarRoot.remove(ee), this.disposeMeshes(ee);
      this.activeParts.set(c, [D.scene]);
    }
    const Ne = o.hi;
    if (Ne && Object.keys(Ne).length > 0) {
      const Q = [], ee = [];
      h ? (Ne.mask1 && ee.push(["mask1", "maskTintMap1", "_mask1@2x.webp"]), Ne.mask2 && ee.push(["mask2", "maskTintMap2", "_mask2@2x.webp"]), Ne.pbr && ee.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : f ? (Ne.mask1 && ee.push(["mask1", "maskTintMap", "_mask1@2x.webp"]), Ne.pbr && ee.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : p ? (Ne[t ? "exMask1" : "mask1"] || Ne.mask1) && ee.push(["mask1", "maskTintMap", `${r}_mask1@2x.webp`]) : x && Ne.mask && ee.push(["mask", "hairMaskMap", "_mask@2x.webp"]), D.scene.traverse((he) => {
        var C;
        if (!he.isMesh) return;
        const de = he.material, ve = (C = de == null ? void 0 : de.userData) == null ? void 0 : C.uniforms;
        if (ve)
          for (const [, st, Ce] of ee)
            ve[st] && Q.push({
              uniform: ve[st],
              url: this.resolve(`${this.masksBaseUrl}${s}${Ce}`)
            });
      }), Ne.normal && T && D.scene.traverse((he) => {
        if (!he.isMesh) return;
        const de = he.material;
        de != null && de.normalMap && Q.push({
          material: de,
          prop: "normalMap",
          url: this.resolve(`${this.masksBaseUrl}${s}_normal@2x.webp`)
        });
      }), Q.length > 0 && this._hiResQueue.set(e.Category + (t ? 100 : 0), Q);
    }
  }
  /** 스트림 기반 fetch (스켈레톤용 — 바이트 단위 진행률) */
  async _fetchWithStream(e, t, n = 3) {
    for (let i = 0; i < n; i++) {
      let s;
      try {
        s = await fetch(e);
      } catch (h) {
        if (i < n - 1) {
          await new Promise((f) => setTimeout(f, 500 * (i + 1)));
          continue;
        }
        throw h;
      }
      if (s.status === 429 && i < n - 1) {
        await new Promise((h) => setTimeout(h, 300 * (i + 1)));
        continue;
      }
      if (!s.ok) throw new Error(`Fetch failed ${s.status}: ${e}`);
      const r = parseInt(s.headers.get("content-length") || "0", 10);
      if (!s.body || r <= 0) {
        const h = await s.arrayBuffer();
        return t(1), h;
      }
      const o = s.body.getReader(), l = [];
      let c = 0;
      for (; ; ) {
        const { done: h, value: f } = await o.read();
        if (h) break;
        l.push(f), c += f.byteLength, t(c / r);
      }
      const d = new Uint8Array(c);
      let u = 0;
      for (const h of l)
        d.set(h, u), u += h.byteLength;
      return d.buffer;
    }
    throw new Error(`Fetch failed after retries: ${e}`);
  }
  /** 동시 요청 수 제한 설정 (0=무제한, 모바일에서 4~6 권장) */
  setMaxConcurrentFetches(e) {
    this._maxConcurrent = e;
  }
  async _acquireFetchSlot() {
    if (this._maxConcurrent <= 0 || this._activeFetches < this._maxConcurrent) {
      this._activeFetches++;
      return;
    }
    return new Promise((e) => {
      this._fetchQueue.push(() => {
        this._activeFetches++, e();
      });
    });
  }
  _releaseFetchSlot() {
    if (this._activeFetches--, this._maxConcurrent > 0) {
      const e = this._fetchQueue.shift();
      e && e();
    }
  }
  /** 429 자동 재시도 + 바이트 진행률 추적 fetch */
  async fetchWithProgress(e, t = 3) {
    await this._acquireFetchSlot();
    try {
      return await this._fetchWithProgressInner(e, t);
    } finally {
      this._releaseFetchSlot();
    }
  }
  async _fetchWithProgressInner(e, t) {
    for (let n = 0; n < t; n++) {
      let i;
      try {
        i = await fetch(e);
      } catch (s) {
        if (n < t - 1) {
          await new Promise((r) => setTimeout(r, 500 * (n + 1)));
          continue;
        }
        throw s;
      }
      if (i.status === 429 && n < t - 1) {
        await new Promise((s) => setTimeout(s, 300 * (n + 1)));
        continue;
      }
      if (!i.ok) throw new Error(`Fetch failed ${i.status}: ${e}`);
      return await i.arrayBuffer();
    }
    throw new Error(`Fetch failed after retries: ${e}`);
  }
  async loadTexture(e) {
    const t = await this.fetchWithProgress(e), n = new Blob([t]);
    this._resourceSizes.set(e, n.size);
    const i = URL.createObjectURL(n);
    return new Promise((s, r) => {
      this.textureLoader.load(i, (o) => {
        URL.revokeObjectURL(i), o.flipY = !1, o.colorSpace = dt, s(o);
      }, void 0, (o) => {
        URL.revokeObjectURL(i), r(o);
      });
    });
  }
  /** 현재 프리셋에서 FaceType의 colors[0] (피부색) 추출 — sRGB→linear 변환 + 공유 uniform 갱신 */
  getSkinColor() {
    var i, s;
    if (!this.currentAvatarData) return;
    const e = this.currentAvatarData.PresetPartsDatas.find(
      (r) => r.Category === 1
      /* FaceType */
    ), t = (s = (i = e == null ? void 0 : e.Color) == null ? void 0 : i.colors) == null ? void 0 : s[0];
    if (!t) return;
    const n = new re(t.r, t.g, t.b).convertSRGBToLinear();
    return this.skinColorUniform.value.copy(n), n;
  }
  applyMask2TintMaterial(e, t, n, i) {
    const r = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof hn)) return o;
      const l = (v) => new re(v.r, v.g, v.b).convertSRGBToLinear(), c = n != null && n[0] ? l(n[0]) : void 0, d = n != null && n[1] ? l(n[1]) : void 0, u = n != null && n[2] ? l(n[2]) : void 0, h = n != null && n[3] ? l(n[3]) : void 0, f = n != null && n[4] ? l(n[4]) : void 0, g = o.userData, _ = g._Emissive_Strangth != null && i, p = g._Mask_Center_X != null ? new P(g._Mask_Center_X, g._Mask_Center_Y, g._Mask_Center_Z) : void 0, m = g._Mask_Radius ?? void 0, x = zp(o, {
        maskTintMap1: t.mask1,
        maskTintMap2: t.mask2,
        pbrMaskMap: t.pbr,
        tintColorR1Uniform: this.skinColorUniform,
        tintColorG1: c,
        tintColorB1: d,
        tintColorR2: u,
        tintColorG2: h,
        tintColorB2: f,
        metallicIntensity: g._MetallicIntensity,
        smoothness: g._Smoothness,
        aoIntensity: g._AOIntensity,
        rimPower: g._Rim_Power,
        rimEdgePower: g._Rim_Edge_Power,
        emissiveMap: _ ? i : void 0,
        emissiveStrength: g._Emissive_Strangth,
        emissiveTintColor: f,
        // _Mask2_Tint_B = colors[4]
        maskRadius: m
      });
      return p && (x.userData.rawMaskCenterUnity = p.clone(), x.userData.hasExplicitVolumeMask = !0), x;
    });
    e.material = r.length === 1 ? r[0] : r, this.attachVolumeMaskDepthMaterial(e);
  }
  applyMaskTintMaterial(e, t, n, i) {
    const r = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof hn)) return o;
      const l = (x) => new re(x.r, x.g, x.b).convertSRGBToLinear();
      let c, d, u, h = !1;
      n === 1 ? (c = i != null && i[0] ? l(i[0]) : void 0, d = i != null && i[1] ? l(i[1]) : void 0) : n === 10 ? (c = new re(0, 0, 0), d = i != null && i[0] ? l(i[0]) : void 0, u = i != null && i[1] ? l(i[1]) : void 0) : (h = !0, d = i != null && i[0] ? l(i[0]) : void 0, u = i != null && i[1] ? l(i[1]) : void 0);
      const f = o.userData, g = f._Mask_Center_X != null ? new P(f._Mask_Center_X, f._Mask_Center_Y, f._Mask_Center_Z) : void 0, _ = f._Mask_Radius ?? void 0, p = n === 1, m = Vp(o, {
        maskTintMap: t.mask,
        pbrMaskMap: t.pbr,
        tintColorR: c,
        tintColorRUniform: h ? this.skinColorUniform : void 0,
        tintColorG: d,
        tintColorB: u,
        metallicIntensity: f._MetallicIntensity,
        smoothness: f._Smoothness,
        aoIntensity: f._AOIntensity,
        rimPower: f._Rim_Power,
        rimEdgePower: f._Rim_Edge_Power,
        maskRadius: _,
        decalSlots: p ? Ye.MAX_DECAL_SLOTS : 0
      });
      if (g && (m.userData.rawMaskCenterUnity = g.clone(), m.userData.hasExplicitVolumeMask = !0), p) {
        const x = Hp(m);
        x && (this.faceDecalSlots = x, this.faceSkinnedMesh = e);
      }
      return m;
    });
    e.material = r.length === 1 ? r[0] : r, this.attachVolumeMaskDepthMaterial(e);
  }
  applySpriteMaskTintMaterial(e, t, n, i, s) {
    const r = Array.isArray(e.material) ? e.material : [e.material], o = i === 3, l = i === 3 ? s ? "eye_r" : "eye_l" : i === 2 ? s ? "eyebrow_r" : "eyebrow_l" : "mouth_l", c = {
      rotation: { value: 0 },
      scale: { value: 1.5 },
      offsetX: { value: 0 },
      offsetY: { value: 0 }
    };
    this.uvTransforms.set(l, c);
    const d = r.map((u) => {
      if (!(u instanceof hn)) return u;
      const h = (_) => new re(_.r, _.g, _.b).convertSRGBToLinear(), f = n != null && n[0] ? h(n[0]) : void 0, g = n != null && n[1] ? h(n[1]) : void 0;
      return jp(u, {
        maskTintMap: t,
        tintColorRUniform: this.skinColorUniform,
        tintColorG: f,
        tintColorB: g,
        uvScaleYEyeBlink: o ? this.eyeBlinkUniform : void 0,
        uvTransform: c
      });
    });
    e.material = d.length === 1 ? d[0] : d;
  }
  applyHairMaterial(e, t, n, i) {
    const r = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof hn)) return o;
      const l = (p) => new re(p.r, p.g, p.b).convertSRGBToLinear(), c = n != null && n[0] ? l(n[0]) : void 0, d = n != null && n[1] ? l(n[1]) : void 0, u = o.transparent, h = o.userData, f = h._Mask_Center_X != null ? new P(h._Mask_Center_X, h._Mask_Center_Y, h._Mask_Center_Z) : void 0, g = h._Mask_Radius ?? void 0, _ = Wp(o, {
        baseColor: c,
        specColor: d,
        maskMap: t,
        normalMap: i ?? void 0,
        blend: u,
        smoothness: h._Smoothness,
        specularShift: h._SpecularShift,
        specularExponent: h._SpecularExponent,
        secondarySpecularShift: h._SecondarySpecularShift,
        secondarySpecularExponent: h._SecondarySpecularExponent,
        enableSecondaryLobe: h._EnableSecondaryLobe !== 0,
        hairRim: h._Hair_Rim ?? (u ? 1.5 : void 0),
        normalInten: h._BumpScale,
        shiftDirection: this._hairShiftDir,
        maskRadius: g
      });
      return f && (_.userData.rawMaskCenterUnity = f.clone(), _.userData.hasExplicitVolumeMask = !0), _;
    });
    e.material = r.length === 1 ? r[0] : r, this.attachVolumeMaskDepthMaterial(e);
  }
  applyLensMaterial(e, t) {
    const n = e.material, i = n.aoMap, s = (u) => new re(u.r, u.g, u.b).convertSRGBToLinear(), r = t != null && t[2] ? s(t[2]) : void 0, o = t != null && t[3] ? s(t[3]) : void 0, l = t != null && t[4] ? s(t[4]) : void 0, c = n.userData, d = 0.8;
    e.material = Xp(n, {
      pbrMaskMap: i ?? void 0,
      topColor: r,
      bottomColor: o,
      specularColor: l,
      gradientSmooth: c._Gradient_Smooth,
      gradientPosition: c._Gradient_Position,
      specularPower: c._Specular_Power,
      fresnelPower: c._Fresnel_Power,
      smoothness: c._Smoothness,
      metallicIntensity: c._MetallicIntensity,
      aoIntensity: c._AOIntensity,
      lightScale: d
    });
  }
  rebindToBaseSkeleton(e) {
    if (this.boneMap.size === 0) return;
    const t = e.skeleton;
    if (!t || !t.bones.length) return;
    const n = [];
    for (const s of t.bones) {
      const r = this.boneMap.get(s.name + "_1") || this.boneMap.get(s.name);
      r ? n.push(r) : n.push(s);
    }
    const i = new _s(n, t.boneInverses);
    if (e.bind(i, e.bindMatrix), !this.headJointMatrix) {
      for (let s = 0; s < t.bones.length; s++)
        if (t.bones[s].name === "Bip001_Head" || t.bones[s].name === "Bip001_Head_1") {
          const r = t.boneInverses[s];
          this.headJointMatrix = r.clone().invert(), new P().setFromMatrixPosition(this.headJointMatrix);
          const l = new P(), c = new P(), d = new P();
          this.headJointMatrix.extractBasis(l, c, d);
          break;
        }
    }
  }
  /**
   * 매 프레임 볼륨 마스크 center를 Head 본의 현재 월드 행렬 기준으로 재계산.
   *
   * vObjPosition = transformed (skinning 후) 공간에서 distance 체크.
   * center = bindMatrixInverse * headBone.matrixWorld * centerInHeadLocal
   */
  updateVolumeMaskCenters() {
    if (!this.volumeMaskEnabled || this.volumeMaskTargets.length === 0) return;
    const e = this.boneMap.get("Bip001_Head");
    if (!e) return;
    e.updateWorldMatrix(!0, !1);
    const t = new P(), n = new P(), i = new P();
    for (const s of this.volumeMaskTargets) {
      const r = s.rawCenter;
      t.set(-r.x, r.y, -r.z), n.copy(t).applyMatrix4(e.matrixWorld), i.copy(n).applyMatrix4(s.mesh.bindMatrixInverse), s.uniforms.volumeMaskCenter && s.uniforms.volumeMaskCenter.value.copy(i);
    }
  }
  /**
   * 볼륨 마스크가 있는 머티리얼의 customDepthMaterial을 설정하여
   * shadow map 렌더링 시에도 동일한 구면 클리핑이 적용되도록 한다.
   * color pass의 uniform을 참조로 공유하므로 center/radius 업데이트가 자동 전파됨.
   */
  attachVolumeMaskDepthMaterial(e) {
    var r, o;
    const t = Array.isArray(e.material) ? e.material : [e.material];
    let n = null;
    for (const l of t) {
      const c = ((r = l.userData) == null ? void 0 : r.hairUniforms) ?? ((o = l.userData) == null ? void 0 : o.uniforms);
      if (c != null && c.volumeMaskEnable) {
        n = c;
        break;
      }
    }
    if (!n) return;
    const i = new po({
      depthPacking: 3201
    }), s = {
      volumeMaskEnable: n.volumeMaskEnable,
      volumeMaskCenter: n.volumeMaskCenter,
      volumeMaskRadius: n.volumeMaskRadius
    };
    i.onBeforeCompile = (l) => {
      for (const [c, d] of Object.entries(s))
        l.uniforms[c] = d;
      l.vertexShader = l.vertexShader.replace(
        "#include <common>",
        `varying vec3 vObjPosition;
#include <common>`
      ), l.vertexShader = l.vertexShader.replace(
        "#include <skinning_vertex>",
        `#include <skinning_vertex>
vObjPosition = transformed;`
      ), l.fragmentShader = l.fragmentShader.replace(
        "#include <common>",
        /* glsl */
        `
                uniform float volumeMaskEnable;
                uniform vec3 volumeMaskCenter;
                uniform float volumeMaskRadius;
                varying vec3 vObjPosition;
                
#include <common>`
      ), l.fragmentShader = l.fragmentShader.replace(
        "#include <map_fragment>",
        /* glsl */
        `
                #include <map_fragment>
                if (volumeMaskEnable > 0.5) {
                    float vmd = distance(vObjPosition, volumeMaskCenter);
                    if (vmd > volumeMaskRadius) discard;
                }
                `
      );
    }, e.customDepthMaterial = i;
  }
  applyColorsToMesh(e, t, n) {
    const i = Array.isArray(e.material) ? e.material : [e.material];
    for (const s of i)
      if (s instanceof hn && n.length > 0 && n[0]) {
        const r = n[0];
        s.color.set(r.r, r.g, r.b);
      }
  }
  /** 블렌드셰이프 외부 적용 (디버그/테스트용) */
  setBlendShapes(e) {
    this.applyBlendShapes(e), this.currentAvatarData && (this.currentAvatarData.blendShapes = [...e]);
  }
  /** 블렌드셰이프 적용 (에디터 슬라이더에서 호출 가능) */
  applyBlendShapes(e) {
    this.currentBlendShapes = e, this.avatarRoot.traverse((t) => {
      if (!t.isSkinnedMesh) return;
      const n = t;
      if (!(!n.morphTargetDictionary || !n.morphTargetInfluences))
        for (const i of e) {
          const s = wo[i.type];
          if (!s) continue;
          const r = n.morphTargetDictionary[s];
          r !== void 0 && (n.morphTargetInfluences[r] = Math.max(0, Math.min(1, i.value / 100)));
        }
    }), this.applyUVBlendShapes(e);
  }
  /** UV 블렌드셰이프: weight → UV uniform 변환 (Unity ApplyBlendShapeToUV 포팅) */
  applyUVBlendShapes(e) {
    for (const o of this.uvTransforms.values())
      o.rotation.value = 0, o.scale.value = 1.5, o.offsetX.value = 0, o.offsetY.value = 0;
    const t = this.uvTransforms.get("eye_l"), n = this.uvTransforms.get("eye_r"), i = this.uvTransforms.get("eyebrow_l"), s = this.uvTransforms.get("eyebrow_r"), r = this.uvTransforms.get("mouth_l");
    for (const o of e) {
      if (o.value === 0) continue;
      const l = o.value;
      switch (o.type) {
        case 6:
        case 8: {
          const c = l / 40 * -0.3;
          t && (t.rotation.value = c * -1), n && (n.rotation.value = c);
          break;
        }
        case 7:
        case 9: {
          const c = l / 40 * 0.3;
          t && (t.rotation.value = c * -1), n && (n.rotation.value = c);
          break;
        }
        case 10:
          t && (t.offsetY.value = l / 45 * -0.15);
          break;
        case 11:
          t && (t.offsetY.value = l / 45 * 0.15);
          break;
        case 12:
          n && (n.offsetY.value = l / 45 * -0.15);
          break;
        case 13:
          n && (n.offsetY.value = l / 45 * 0.1);
          break;
        case 18:
        case 20: {
          const c = l / 40 * 0.15;
          t && (t.offsetX.value = c), n && (n.offsetX.value = c * -1);
          break;
        }
        case 19:
        case 21: {
          const c = l / 70 * -0.15;
          t && (t.offsetX.value = c), n && (n.offsetX.value = c * -1);
          break;
        }
        case 14: {
          const c = l / 60 * 0.06 + 1.5;
          t && (t.scale.value = c), n && (n.scale.value = c);
          break;
        }
        case 15: {
          const c = 1.5 - l / 60 * 0.5;
          t && (t.scale.value = c), n && (n.scale.value = c);
          break;
        }
        case 22: {
          const c = l / 40 * -0.25;
          i && (i.rotation.value = c * -1), s && (s.rotation.value = c);
          break;
        }
        case 23: {
          const c = l / 40 * 0.3;
          i && (i.rotation.value = c * -1), s && (s.rotation.value = c);
          break;
        }
        case 26:
          i && (i.offsetY.value = l / 45 * -0.25);
          break;
        case 27:
          i && (i.offsetY.value = l / 45 * 0.15);
          break;
        case 28:
          s && (s.offsetY.value = l / 45 * -0.25);
          break;
        case 29:
          s && (s.offsetY.value = l / 45 * 0.15);
          break;
        case 34: {
          const c = l / 40 * 0.15;
          i && (i.offsetX.value = c), s && (s.offsetX.value = c * -1);
          break;
        }
        case 35: {
          const c = l / 70 * -0.15;
          i && (i.offsetX.value = c), s && (s.offsetX.value = c * -1);
          break;
        }
        case 30: {
          const c = l / 100 * 0.06 + 1.5;
          i && (i.scale.value = c), s && (s.scale.value = c);
          break;
        }
        case 31: {
          const c = 1.5 - l / 100 * 0.5;
          i && (i.scale.value = c), s && (s.scale.value = c);
          break;
        }
        case 46:
          r && (r.rotation.value = l / 60 * -0.3 * -1);
          break;
        case 47:
          r && (r.rotation.value = l / 60 * 0.3 * -1);
          break;
        case 48:
          r && (r.scale.value = l / 100 * 0.08 + 1.5);
          break;
        case 49:
          r && (r.scale.value = 1.5 - l / 100 * 0.5);
          break;
        case 50:
          r && (r.offsetX.value = l / 50 * 0.25);
          break;
        case 51:
          r && (r.offsetX.value = l / 50 * -0.25);
          break;
        case 52:
          r && (r.offsetY.value = l / 80 * -0.1);
          break;
        case 53:
          r && (r.offsetY.value = l / 80 * 0.15);
          break;
      }
    }
  }
  initializeAnimation() {
    this.mixer = new Kf(this.avatarRoot);
    const e = this.findAnimClip(this.defaultIdleName);
    e && (this.defaultAction = this.mixer.clipAction(e), this.defaultAction.setLoop(2201, 1 / 0), this.defaultAction.play(), this.currentAction = this.defaultAction), this.mixer.addEventListener("finished", (t) => {
      t.action !== this.defaultAction && this.fadeToDefault();
    });
  }
  async playAnimationByName(e, t = !1) {
    if (!this.mixer) return;
    let n = this.findAnimClip(e);
    if (!n && (n = await this.loadAnimationClip(e), !n))
      return;
    const i = this.mixer.clipAction(n);
    t ? (i.setLoop(2201, 1 / 0), i.clampWhenFinished = !1) : (i.setLoop(2200, 1), i.clampWhenFinished = !0), this.currentAction && this.currentAction !== i ? (this.currentAction.enabled = !0, i.reset(), i.play(), i.crossFadeFrom(this.currentAction, 0.25, !0)) : (i.reset(), i.play()), this.currentAction = i;
  }
  /** 개별 애니메이션 GLB를 lazy load */
  loadAnimationClip(e) {
    return new Promise((t) => {
      const n = this.resolve(`${this.animBaseUrl}${e}.glb`);
      this.gltfLoader.load(
        n,
        (i) => {
          if (i.animations && i.animations.length > 0) {
            for (const r of i.animations) {
              const o = this.animClips.get(r.name);
              (!o || r.tracks.length > o.tracks.length) && this.animClips.set(r.name, r);
            }
            const s = this.findAnimClip(e);
            t(s);
          } else
            t(null);
        },
        void 0,
        () => {
          console.warn(`[AvatarViewer] 애니메이션 로드 실패: ${n}`), t(null);
        }
      );
    });
  }
  fadeToDefault() {
    if (!this.currentAction || !this.mixer) return;
    const e = this.poseAction ?? this.defaultAction;
    !e || e === this.currentAction || (this.currentAction.enabled = !0, e.reset(), e.play(), e.crossFadeFrom(this.currentAction, 0.25, !0), this.currentAction = e);
  }
  findAnimClip(e) {
    if (this.animClips.has(e)) return this.animClips.get(e);
    for (const [t, n] of this.animClips)
      if (t.includes(e)) return n;
    return null;
  }
  /** Cap 마운트 포인트 본 조회 (헤어 데이터의 capMountBone 사용, useDefaultHairCapMount 시 항상 001) */
  getCapMountBone() {
    var e;
    if (this.capUseDefaultMount)
      return this.boneMap.get("Mount_HairCap_001") ?? null;
    if (this.hairCapMountBone)
      return this.boneMap.get(this.hairCapMountBone) ?? this.boneMap.get("Mount_HairCap_001") ?? null;
    if (this.currentAvatarData) {
      const t = this.currentAvatarData.PresetPartsDatas.find(
        (i) => i.Category === 0
        /* Hair */
      ), n = (e = t == null ? void 0 : t.ID) == null ? void 0 : e.match(/Ava_[HW]_(\d+)/);
      if (n)
        return this.boneMap.get(`Mount_HairCap_${n[1]}`) ?? this.boneMap.get("Mount_HairCap_001") ?? null;
    }
    return this.boneMap.get("Mount_HairCap_001") ?? null;
  }
  updateHairCapVisibility() {
    if (!this.hairNodes) return;
    const e = this.isCapActive();
    this.hairNodes.cap.visible = e, this.hairNodes.normal.visible = !e;
  }
  isCapActive() {
    const e = this.activeParts.get("8");
    return e != null && e.length > 0;
  }
  /** SmoothEyeBlink — 매 프레임 호출 */
  updateEyeBlink(e) {
    if (!this._eyeBlinkPaused) {
      if (this.eyeBlinkElapsed >= 0) {
        if (this.eyeBlinkElapsed += e, this.eyeBlinkElapsed >= Ye.BLINK_DURATION)
          this.eyeBlinkUniform.value = 1, this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending ? (this.eyeBlinkDoublePending = !1, this.eyeBlinkNextAt = 0.1) : this.eyeBlinkNextAt = Ye.BLINK_MIN_INTERVAL + Math.random() * (Ye.BLINK_MAX_INTERVAL - Ye.BLINK_MIN_INTERVAL);
        else {
          const t = this.eyeBlinkElapsed / Ye.BLINK_DURATION, n = Math.sin(t * Math.PI);
          this.eyeBlinkUniform.value = 1 - n * 0.85;
        }
        return;
      }
      this.eyeBlinkTimer += e, this.eyeBlinkTimer >= this.eyeBlinkNextAt && (this.eyeBlinkTimer = 0, this.eyeBlinkElapsed = 0, this.eyeBlinkDoublePending = Math.random() < Ye.BLINK_DOUBLE_CHANCE);
    }
  }
  /** 눈 깜빡임 타이머 초기화 (파츠 로드 완료 후 호출) */
  resetEyeBlink() {
    this.eyeBlinkUniform.value = 1, this.eyeBlinkElapsed = -1, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = Ye.BLINK_MIN_INTERVAL + Math.random() * (Ye.BLINK_MAX_INTERVAL - Ye.BLINK_MIN_INTERVAL), this.eyeBlinkDoublePending = !1;
  }
  // ── 데칼 시스템 ──
  /** decals.json 로드 (최초 1회, 이후 캐시) */
  async loadDecalsMetadata() {
    return this.decalsMetadata ? this.decalsMetadata : this.decalsMetadataPromise ? this.decalsMetadataPromise : (this.decalsMetadataPromise = (async () => {
      try {
        const e = this.resolve(this.decalsBaseUrl + "decals.json"), t = await fetch(e);
        if (!t.ok) throw new Error(`Failed to load decals.json: ${t.status}`);
        const n = await t.json();
        return this.decalsMetadata = n, n;
      } catch (e) {
        return console.warn("[Decal] decals.json 로드 실패:", e), this.decalsMetadata = {}, {};
      }
    })(), this.decalsMetadataPromise);
  }
  /** partsdata.json 로드 (최초 1회, 이후 캐시) */
  async loadPartsMetadata() {
    return this.partsMetadata ? this.partsMetadata : this.partsMetadataPromise ? this.partsMetadataPromise : (this.partsMetadataPromise = (async () => {
      try {
        const e = this.resolve("partsdata.json"), t = await fetch(e);
        if (!t.ok) throw new Error(`Failed: ${t.status}`);
        const n = await t.json();
        return this.partsMetadata = n, n;
      } catch (e) {
        return console.warn("[AvatarViewer] partsdata.json 로드 실패:", e), this.partsMetadata = {}, {};
      }
    })(), this.partsMetadataPromise);
  }
  /** 데칼 카테고리인지 확인 */
  static isDecalCategory(e) {
    return e >= 12 && e <= 16;
  }
  /** 데칼 파츠 로드 (texture + 프로젝터 설정) */
  async loadDecalPart(e, t, n, i) {
    const s = this.swapSeq.get(e) ?? 0;
    if (this.removeDecalCategory(e), !t || t === "") return;
    const r = await this.loadDecalsMetadata();
    if ((this.swapSeq.get(e) ?? 0) !== s) return;
    const o = r[t];
    if (!o || !o.projectors || o.projectors.length === 0) {
      console.warn(`[Decal] 메타데이터 없음: ${t}`, o);
      return;
    }
    const l = this.boneMap.get(o.bone);
    if (!l) {
      console.warn(`[Decal] 본 없음: ${o.bone}`);
      return;
    }
    const c = (g) => {
      const _ = (m) => m.r === 0 && m.g === 0 && m.b === 0 && m.a === 0;
      if (n && n.length > 0 && !_(n[0])) {
        const m = i && g > 0 && n.length > 1 ? 1 : 0, x = n[m], v = new re(x.r, x.g, x.b).convertSRGBToLinear();
        return new Ve(v.r, v.g, v.b, x.a);
      } else if (o.color) {
        const m = new re(o.color[0], o.color[1], o.color[2]).convertSRGBToLinear();
        return new Ve(m.r, m.g, m.b, o.color[3]);
      }
      return new Ve(1, 1, 1, 1);
    }, d = [], u = [], f = o.projectors.length > 1 ? ["", "_Ex"] : [""];
    for (const g of f)
      try {
        const _ = this.resolve(`${this.partsBaseUrl}${t}${g}.glb`), p = await fetch(_);
        if (p.ok) {
          const m = await p.arrayBuffer();
          this._resourceSizes.set(_, m.byteLength);
          const x = await new Promise((v, T) => {
            this.gltfLoader.parse(m, "", (E) => v(E.scene), T);
          });
          u.push(x);
        } else
          u.push(null);
      } catch {
        u.push(null);
      }
    if ((this.swapSeq.get(e) ?? 0) === s) {
      for (let g = 0; g < o.projectors.length; g++) {
        const _ = o.projectors[g];
        if (!_.texture || !_.size) continue;
        const p = this.findFreeDecalSlot();
        if (p < 0) {
          console.warn(`[Decal] 빈 슬롯 없음 (max ${Ye.MAX_DECAL_SLOTS})`);
          break;
        }
        let m;
        try {
          const w = this.resolve(this.decalsBaseUrl + _.texture);
          m = await this.loadTexture(w), m.colorSpace = mt, m.generateMipmaps = !1, m.minFilter = 1006;
          const D = m.image;
          this._decalTextures.push({
            type: "decal",
            name: w.split("/").pop() || "",
            url: w,
            size: this._resourceSizes.get(w) ?? 0,
            texture: m,
            width: (D == null ? void 0 : D.width) ?? 0,
            height: (D == null ? void 0 : D.height) ?? 0
          });
        } catch (w) {
          console.warn(`[Decal] 텍스처 로드 실패: ${_.texture}`, w);
          continue;
        }
        if ((this.swapSeq.get(e) ?? 0) !== s) return;
        const x = new Le(), v = u[g] ?? u[0];
        if (v) {
          const w = v.children[0];
          w && (w.updateMatrix(), x.copy(w.matrix));
        } else if (_.position || _.rotation) {
          const w = new P(..._.position ?? [0, 0, 0]), D = new Ut(..._.rotation ?? [0, 0, 0, 1]);
          x.compose(w, D, new P(1, 1, 1));
        }
        const T = new Le().set(
          1 / _.size[0],
          0,
          0,
          0.5,
          0,
          1 / _.size[1],
          0,
          0.5,
          0,
          0,
          1 / _.size[2],
          0.5,
          0,
          0,
          0,
          1
        ), E = c(g), R = {
          slotIndex: p,
          category: e,
          bone: l,
          localMatrix: x,
          sizeScaleMatrix: T,
          texture: m,
          color: E.clone(),
          hasSkinColor: !!o.hasSkinColor
        };
        this.activeDecalProjectors.set(p, R), d.push(p);
      }
      this.decalCategorySlots.set(e, d), this.reorderDecalSlots(), this.updateDecalProjections();
    }
  }
  /** 데칼 카테고리 해제 */
  removeDecalCategory(e) {
    const t = this.decalCategorySlots.get(e);
    if (t) {
      for (const n of t) {
        const i = this.activeDecalProjectors.get(n);
        if (i && i.texture.dispose(), this.activeDecalProjectors.delete(n), n < this.faceDecalSlots.length) {
          const s = this.faceDecalSlots[n];
          s.enabled.value = 0;
        }
      }
      this.decalCategorySlots.delete(e);
    }
  }
  /** 빈 데칼 슬롯 인덱스 반환 */
  findFreeDecalSlot() {
    for (let e = 0; e < Ye.MAX_DECAL_SLOTS; e++)
      if (!this.activeDecalProjectors.has(e)) return e;
    return -1;
  }
  /** 모든 활성 데칼 프로젝터를 draw order에 맞게 슬롯 재배치 */
  reorderDecalSlots() {
    if (this.faceDecalSlots.length === 0) return;
    const e = [];
    for (const [, t] of this.activeDecalProjectors)
      e.push(t);
    e.sort((t, n) => {
      const i = Ye.DECAL_DRAW_ORDER[t.category] ?? 0, s = Ye.DECAL_DRAW_ORDER[n.category] ?? 0;
      return i - s;
    });
    for (let t = 0; t < this.faceDecalSlots.length; t++)
      this.faceDecalSlots[t].enabled.value = 0;
    this.activeDecalProjectors.clear(), this.decalCategorySlots.clear();
    for (let t = 0; t < e.length && t < Ye.MAX_DECAL_SLOTS; t++) {
      const n = e[t];
      n.slotIndex = t, this.activeDecalProjectors.set(t, n);
      const i = this.decalCategorySlots.get(n.category) ?? [];
      i.push(t), this.decalCategorySlots.set(n.category, i);
      const s = this.faceDecalSlots[t];
      s.enabled.value = 1, s.texture.value = n.texture, s.color.value = n.color.clone(), s.useSkinColor.value = n.hasSkinColor ? 1 : 0;
    }
  }
  /** 매 프레임: 데칼 프로젝션 행렬 갱신 (본 애니메이션 반영) */
  updateDecalProjections() {
    if (this.activeDecalProjectors.size === 0 || this.faceDecalSlots.length === 0) return;
    const e = new Le(), t = new Le(), n = new Le(), i = new Le();
    this.faceSkinnedMesh && (this.faceSkinnedMesh.updateMatrixWorld(!1), i.copy(this.faceSkinnedMesh.matrixWorld).invert());
    for (const [s, r] of this.activeDecalProjectors)
      s >= this.faceDecalSlots.length || (r.bone.updateWorldMatrix(!0, !1), t.multiplyMatrices(r.bone.matrixWorld, r.localMatrix), e.copy(t).invert(), n.multiplyMatrices(r.sizeScaleMatrix, e), this.faceDecalSlots[s].invMatrix.value.copy(n));
  }
  /** 모든 데칼 해제 */
  clearAllDecals() {
    for (const [e, t] of this.activeDecalProjectors)
      t.texture.dispose(), e < this.faceDecalSlots.length && (this.faceDecalSlots[e].enabled.value = 0);
    this.activeDecalProjectors.clear(), this.decalCategorySlots.clear();
  }
  disposeMeshes(e) {
    e.traverse((t) => {
      var n;
      if (t.isMesh) {
        const i = t;
        (n = i.geometry) == null || n.dispose();
        const s = Array.isArray(i.material) ? i.material : [i.material];
        for (const r of s) r.dispose();
      }
    });
  }
  //#endregion
};
Ye.BLINK_DURATION = 0.15, Ye.BLINK_MIN_INTERVAL = 2, Ye.BLINK_MAX_INTERVAL = 6, Ye.BLINK_DOUBLE_CHANCE = 0.15, Ye.MAX_DECAL_SLOTS = 6, Ye.DECAL_DRAW_ORDER = {
  12: 0,
  // DecoAge
  13: 1,
  // DecoBlush
  16: 2,
  // DecoSpot
  15: 3,
  // DecoScar
  14: 4
  // DecoPaint
}, Ye.HAIR_PROP_MAP = {
  _Smoothness: "hairSmoothness",
  _SpecularShift: "hairSpecShift",
  _SpecularExponent: "hairSpecExponent",
  _SecondarySpecularShift: "hairSecSpecShift",
  _SecondarySpecularExponent: "hairSecSpecExponent",
  _Hair_Rim: "hairRimTransmission"
}, Ye.PROP_UNIFORM_MAP = {
  _MetallicIntensity: "metallicIntensity",
  _Smoothness: "smoothnessIntensity",
  _AOIntensity: "aoIntensity",
  _Rim_Power: "rimPower",
  _Rim_Edge_Power: "rimEdgePower",
  _Emissive_Strangth: "emissiveStrength",
  _Blink_Speed: "blinkSpeed",
  _Gradient_Smooth: "lensGradientSmooth",
  _Gradient_Position: "lensGradientPosition",
  _Specular_Power: "lensSpecPower",
  _Fresnel_Power: "lensFresnelPower"
}, Ye.POSE_ANIM_MAP = {
  Pose_Idle: "",
  Pose_CombatStand: "Ani_002_CombatStand",
  Pose_CrossedArms: "Ani_003_CrossedArms",
  Pose_EgocentricStand: "Ani_004_EgocentricStand",
  Pose_ThumbsUp: "Ani_005_ThumbsUp",
  Pose_DanceHello: "Ani_006_Dance_Hello",
  Pose_DanceDrunk: "Ani_007_Dance_Drunk",
  Pose_Victory: "Ani_008_Victory",
  Pose_FlexMuscles: "Ani_009_FlexMuscles",
  Pose_Levitation: "Ani_010_Levitation",
  Pose_Boxing: "Ani_011_Boxing",
  Pose_ZombieWalk: "Ani_012_ZombieWalk"
};
let ma = Ye;
var wo = /* @__PURE__ */ ((a) => (a[a.Fat = 0] = "Fat", a[a.Muscles = 1] = "Muscles", a[a.Slimness = 2] = "Slimness", a[a.Thin = 3] = "Thin", a[a.BreastSize = 4] = "BreastSize", a[a.Neck_Width = 5] = "Neck_Width", a[a.EyeL_Rotate_Left = 6] = "EyeL_Rotate_Left", a[a.EyeL_Rotate_Right = 7] = "EyeL_Rotate_Right", a[a.EyeR_Rotate_Left = 8] = "EyeR_Rotate_Left", a[a.EyeR_Rotate_Right = 9] = "EyeR_Rotate_Right", a[a.EyeL_Move_Up = 10] = "EyeL_Move_Up", a[a.EyeL_Move_Down = 11] = "EyeL_Move_Down", a[a.EyeR_Move_Up = 12] = "EyeR_Move_Up", a[a.EyeR_Move_Down = 13] = "EyeR_Move_Down", a[a.EyeL_Scale_Up = 14] = "EyeL_Scale_Up", a[a.EyeL_Scale_Down = 15] = "EyeL_Scale_Down", a[a.EyeR_Scale_Up = 16] = "EyeR_Scale_Up", a[a.EyeR_Scale_Down = 17] = "EyeR_Scale_Down", a[a.EyeL_Move_In = 18] = "EyeL_Move_In", a[a.EyeL_Move_Out = 19] = "EyeL_Move_Out", a[a.EyeR_Move_In = 20] = "EyeR_Move_In", a[a.EyeR_Move_Out = 21] = "EyeR_Move_Out", a[a.BrowL_Rotate_Left = 22] = "BrowL_Rotate_Left", a[a.BrowL_Rotate_Right = 23] = "BrowL_Rotate_Right", a[a.BrowR_Rotate_Left = 24] = "BrowR_Rotate_Left", a[a.BrowR_Rotate_Right = 25] = "BrowR_Rotate_Right", a[a.BrowL_Move_Up = 26] = "BrowL_Move_Up", a[a.BrowL_Move_Down = 27] = "BrowL_Move_Down", a[a.BrowR_Move_Up = 28] = "BrowR_Move_Up", a[a.BrowR_Move_Down = 29] = "BrowR_Move_Down", a[a.BrowL_Scale_Up = 30] = "BrowL_Scale_Up", a[a.BrowL_Scale_Down = 31] = "BrowL_Scale_Down", a[a.BrowR_Scale_Up = 32] = "BrowR_Scale_Up", a[a.BrowR_Scale_Down = 33] = "BrowR_Scale_Down", a[a.BrowL_Move_In = 34] = "BrowL_Move_In", a[a.BrowL_Move_Out = 35] = "BrowL_Move_Out", a[a.BrowR_Move_In = 36] = "BrowR_Move_In", a[a.BrowR_Move_Out = 37] = "BrowR_Move_Out", a[a.Nose_Rotate_Left = 38] = "Nose_Rotate_Left", a[a.Nose_Rotate_Right = 39] = "Nose_Rotate_Right", a[a.Nose_Scale_Up = 40] = "Nose_Scale_Up", a[a.Nose_Scale_Down = 41] = "Nose_Scale_Down", a[a.Nose_Move_Left = 42] = "Nose_Move_Left", a[a.Nose_Move_Right = 43] = "Nose_Move_Right", a[a.Nose_Move_Up = 44] = "Nose_Move_Up", a[a.Nose_Move_Down = 45] = "Nose_Move_Down", a[a.Mouth_Rotate_Left = 46] = "Mouth_Rotate_Left", a[a.Mouth_Rotate_Right = 47] = "Mouth_Rotate_Right", a[a.Mouth_Scale_Up = 48] = "Mouth_Scale_Up", a[a.Mouth_Scale_Down = 49] = "Mouth_Scale_Down", a[a.Mouth_Move_Left = 50] = "Mouth_Move_Left", a[a.Mouth_Move_Right = 51] = "Mouth_Move_Right", a[a.Mouth_Move_Up = 52] = "Mouth_Move_Up", a[a.Mouth_Move_Down = 53] = "Mouth_Move_Down", a[a.Face_Vertical_Up = 54] = "Face_Vertical_Up", a[a.Face_Vertical_Down = 55] = "Face_Vertical_Down", a[a.Face_Horizon_Up = 56] = "Face_Horizon_Up", a[a.Face_Horizon_Down = 57] = "Face_Horizon_Down", a[a.Face_Nose_Scale_Up = 58] = "Face_Nose_Scale_Up", a[a.Face_Nose_Scale_Down = 59] = "Face_Nose_Scale_Down", a[a.Face_Ear_Fold = 60] = "Face_Ear_Fold", a[a.Glasses_Move_Up = 61] = "Glasses_Move_Up", a[a.Glasses_Move_Down = 62] = "Glasses_Move_Down", a[a.Face_Jaw_Square = 63] = "Face_Jaw_Square", a[a.Face_Jaw_Sharp = 64] = "Face_Jaw_Sharp", a[a.Face_Nose_Vertical_Down = 65] = "Face_Nose_Vertical_Down", a[a.Face_Nose_Vertical_Up = 66] = "Face_Nose_Vertical_Up", a[a.Face_Nose_Real_Down = 67] = "Face_Nose_Real_Down", a[a.Face_Nose_Real_Up = 68] = "Face_Nose_Real_Up", a))(wo || {});
const lt = {
  // Renderer
  toneMappingExposure: 1.05,
  // Main Light (Unity: pos(0,0,0), rot(153.055, 6.881, 0.955), intensity=1.05)
  mainLight: {
    color: "#fefbf1",
    intensity: 3.5,
    // Unity 원본 intensity (커스텀 셰이더 라이트 보정용)
    rotation: { x: 153.055, y: 12, z: 0.955 }
  },
  // Rim Light (Unity: pos(0.02, 0.578, 0.534), rot(205.607, -144.941, 90.515), intensity=0.7)
  rimLight: {
    color: "#81c3f3",
    intensity: 1.5,
    rotation: { x: 205.607, y: -144.941, z: 90.515 }
  },
  // Ambient Light
  ambient: {
    color: "#6e6b68",
    intensity: 1
  },
  // Shadow
  shadow: {
    mapSize: 2048,
    bias: -2e-3,
    normalBias: 0.02,
    cameraNear: 0.1,
    cameraFar: 10,
    cameraLeft: -1.5,
    cameraRight: 1.5,
    cameraTop: 2,
    cameraBottom: -0.5,
    groundOpacity: 0.3
  },
  // Bloom (UnrealBloomPass: strength, radius, threshold)
  bloom: {
    strength: 0.12,
    radius: 0.2,
    threshold: 0.9,
    emissiveBoost: 0.5
  },
  // Environment Map
  envMapColor: "#6e6b68",
  // Gradient Background (RuntimeGradient.shader)
  gradient: {
    color: "#565143",
    highlightIntensity: 0.32,
    highlightPosition: [0.42, 0.13],
    highlightSize: 1.37,
    highlightSoftness: 0.5,
    shadowIntensity: 0,
    shadowPosition: [0.17, 0.78],
    shadowSize: 1.49,
    overallContrast: 0.5,
    colorSaturation: 0.35,
    directionalInfluence: 0.02
  },
  // LiftGammaGain
  liftGammaGain: {
    invGamma: [1 / 1.02, 1 / 1.02, 1 / 1.02],
    gain: [1.1, 1.1, 1.1]
  },
  // 웹 컴포넌트 기본 카메라/아바타 설정
  camera: {
    positionY: 0.84,
    positionZ: 2.22,
    rotationX: -5,
    // pitch (도)
    fov: 40
  },
  avatar: {
    rotationY: -5
    // Y축 회전 (도)
  }
};
function Yp(a, e, t) {
  const n = new Ut().setFromEuler(
    new Kt(Vt.degToRad(a), Vt.degToRad(-e), Vt.degToRad(-t), "YXZ")
  );
  return new P(0, 0, 1).applyQuaternion(n);
}
function $r(a) {
  const e = Yp(a.x, a.y, a.z);
  return new P().addScaledVector(e, -5);
}
const Kp = `
:host { display: block; position: relative; overflow: hidden; font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; --status-bar-h: 0px; -webkit-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; }
:host(.compact-mode) { --status-bar-h: 40px; }
*, *::before, *::after { box-sizing: border-box; }

/* 전체 레이아웃 */
.editor-root { width: 100%; height: 100%; position: relative; }
canvas { display: block; width: 100%; height: 100%; touch-action: none; }

/* 로딩 오버레이 */
.loading-overlay {
    position: absolute; inset: 0; z-index: 50;
    background: transparent;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 16px;
    transition: opacity 0.4s;
}
.loading-overlay.hidden { opacity: 0; pointer-events: none; }
.loading-overlay .spinner {
    width: 36px; height: 36px;
    border: 3px solid rgba(128,128,128,0.3); border-top-color: rgba(255,255,255,0.8);
    border-radius: 50%; animation: editor-spin 0.7s linear infinite;
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.3));
}
.loading-overlay .progress-bar {
    width: 140px; height: 4px; background: rgba(0,0,0,0.25); border-radius: 2px; overflow: hidden;
    box-shadow: 0 0 6px rgba(0,0,0,0.2);
}
.loading-overlay .progress-fill {
    height: 100%; width: 0%; background: #fff; border-radius: 2px;
    transition: width 0.2s;
    box-shadow: 0 0 6px rgba(255,255,255,0.4);
}

/* X 닫기 버튼 (데스크탑 숨김, 모바일만 표시) */
.close-btn {
    position: absolute; top: calc(16px + var(--status-bar-h)); right: 16px; z-index: 20;
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(0,0,0,0.5); color: #fff;
    display: none; align-items: center; justify-content: center;
    font-size: 18px; cursor: pointer;
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    transition: background 0.15s, opacity 0.3s, transform 0.3s;
}
.close-btn:hover { background: rgba(0,0,0,0.7); }
.close-btn.hidden { opacity: 0; pointer-events: none; }

/* Edit 버튼 (우하단, 시작화면) */
.edit-btn {
    position: absolute; bottom: 20px; right: 20px; z-index: 20;
    width: 100px; height: 56px; padding: 0; border-radius: 12px;
    background: rgba(50,50,50,0.85); color: #fff;
    font: 600 20px/normal Pretendard, -apple-system, sans-serif;
    text-align: center; cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.4);
    transition: background 0.15s, opacity 0.3s, transform 0.3s;
}
.edit-btn:hover { background: rgba(70,70,70,0.9); }
.edit-btn.hidden { opacity: 0; transform: translateY(20px); pointer-events: none; }

/* 에디터 패널 — 우측 플로팅 */
.editor-panel {
    position: absolute; top: 56px; right: 12px;
    width: 424px; height: 546px;
    background: rgba(38, 38, 38, 0.94);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    border-radius: 16px;
    display: flex; flex-direction: column;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    transition: transform 0.2s ease-out, opacity 0.15s;
    touch-action: pan-y;
}
.editor-panel.hidden { transform: translateX(440px); opacity: 0; pointer-events: none; }

/* 카테고리 탭 바 */
.category-bar {
    display: flex; height: 58px; padding: 2px 16px 0 16px;
    align-items: center; gap: 8px;
    flex-shrink: 0; background: #3B3B3B;
}
.category-btn {
    display: flex; height: 48px; padding: 4px 10px;
    justify-content: center; align-items: center;
    flex: 1 0 0; border: none;
    background: transparent; cursor: pointer;
    position: relative;
}
.category-btn img { width: 100%; height: 100%; object-fit: contain; opacity: 0.4; transition: opacity 0.2s; filter: grayscale(1); }
.category-btn:hover img { opacity: 0.7; }
.category-btn.active img { opacity: 1; filter: none; }
.category-btn .badge {
    position: absolute; top: 2px; right: 2px;
    width: 7px; height: 7px; border-radius: 50%;
    background: #f44; display: none;
}
.category-btn.dirty .badge { display: none; }

/* 서브 탭 바 */
.subtab-bar {
    display: flex; height: 48px; padding: 0 24px;
    align-items: center; justify-content: center; gap: 6px; flex-shrink: 0;
}
.subtab-bar.hidden { display: none; }
.subtab-btn {
    display: flex; height: 36px; padding: 0 16px;
    justify-content: center; align-items: center;
    border: none; border-radius: 14px;
    background: transparent; color: rgba(255,255,255,0.4); cursor: pointer;
    font: 600 16px/normal Pretendard, -apple-system, sans-serif; transition: all 0.15s;
    position: relative;
}
.subtab-btn:hover { color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.06); }
.subtab-btn:active { transform: scale(0.95); }
.subtab-btn.active { background: rgba(255,255,255,0.14); color: #fff; }
.subtab-btn .dot {
    position: absolute; top: 1px; right: 1px;
    width: 6px; height: 6px; border-radius: 50%;
    background: #f44; display: none;
}
.subtab-btn.dirty .dot { display: none; }

/* 파츠 그리드 */
.parts-grid {
    flex: 1; overflow-x: hidden; overflow-y: scroll; padding: 6px 8px 6px 16px;
    margin-right: 4px;
    display: grid; grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: min-content;
    gap: 8px; align-content: start;
    -webkit-overflow-scrolling: touch; touch-action: pan-y;
}
.parts-grid::-webkit-scrollbar { width: 4px; }
.parts-grid::-webkit-scrollbar-track { background: transparent; }
.parts-grid::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
.part-cell {
    position: relative;
}
.part-item {
    height: 92px; padding: 0;
    border-radius: 12px;
    background: #6A6A6A; border: none;
    cursor: pointer; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    position: relative;
    transition: background 0.2s, transform 0.15s;
}
.part-item img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; display: block; transition: transform 0.15s; }
.part-item:hover { background: rgba(100, 100, 100, 0.7); }
.part-item:hover img { transform: scale(1.08); }
.part-item:active { transform: scale(0.95); transition: transform 0.08s; }
.part-cell.selected .part-item::after {
    content: ""; position: absolute; inset: 0;
    border: 4px solid #00AEF7; border-radius: 12px;
    pointer-events: none; z-index: 1;
}
.part-cell.selected .part-item { background: #4E6C76; }
.part-cell.selected .part-item:hover { background: #5A7A84; }
.part-cell .check {
    position: absolute; top: -6px; right: -6px; z-index: 2;
    width: 20px; height: 20px; aspect-ratio: 1/1; border-radius: 50%;
    background: #00AEF7;
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    opacity: 0; transform: scale(0); pointer-events: none;
    transition: opacity 0.15s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.part-cell.selected .check { opacity: 1; transform: scale(1); }
.part-item.unequip {
    background: #6A6A6A;
}
.part-item.unequip:hover { background: rgba(60, 60, 60, 0.6); }
.part-item.unequip img { width: 88px; height: 88px; aspect-ratio: 1/1; opacity: 0.5; }

/* 4열 (Pose 등) */
.parts-grid.pose-grid .part-item { height: 116px; }

/* 하단 플로팅 버튼 (Colors / Custom) — 그리드 위 플로팅 */
.floating-bar {
    position: absolute; bottom: 8px; left: 0; right: 0;
    display: flex; gap: 10px; padding: 8px 14px;
    justify-content: center; z-index: 5;
}
.floating-bar.hidden { display: none; }
.floating-btn {
    display: flex; justify-content: center; align-items: center; gap: 8px;
    min-width: 72px; padding: 8px 16px 8px 12px; border: none; border-radius: 999px;
    background: #3F5861; color: #FFF;
    cursor: pointer; font: 500 16px/normal Pretendard, -apple-system, sans-serif;
    text-align: center;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    transition: background 0.15s;
}
.floating-btn:hover { background: #4A6A75; transform: translateY(-2px); box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.3); }
.floating-btn:active { transform: scale(0.95); }
.floating-btn img { width: 24px; height: 24px; }

/* Exit / Save 버튼 */
.footer-bar {
    position: absolute; bottom: 22px; right: 12px;
    display: flex; gap: 8px;
    transition: opacity 0.3s, transform 0.3s;
}
.footer-bar.hidden { opacity: 0; transform: translateY(20px); pointer-events: none; }
.footer-btn {
    width: 140px; height: 50px; padding: 0; border: none; border-radius: 12px;
    cursor: pointer; font: 600 18px/22px Pretendard, -apple-system, sans-serif; color: #fff; text-align: center;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.15s;
}
.footer-btn.exit { background: #474747; color: #eee; }
.footer-btn.exit:hover { background: rgba(100,100,100,0.9); transform: translateY(-1px); }
.footer-btn.exit:active { transform: scale(0.96); }
.footer-btn.save { background: #597B87; color: #fff; }
.footer-btn.save:hover { background: #6B8F9B; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
.footer-btn.save:active { transform: scale(0.96); }

/* 뷰어 사이드 툴바 */
.view-toolbar {
    position: absolute; right: 448px; top: 50%; transform: translateY(-50%);
    display: flex; flex-direction: column; gap: 4px; z-index: 10;
    transition: opacity 0.3s;
}
.view-toolbar.hidden { opacity: 0; pointer-events: none; }
.toolbar-btn {
    width: 36px; height: 36px; border: none; border-radius: 10px;
    background: rgba(50,50,50,0.7); color: rgba(255,255,255,0.5); cursor: pointer;
    font: 16px/1 monospace; backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.15s, color 0.15s;
}
.toolbar-btn img { width: 24px; height: 24px; }
.toolbar-btn:active { transform: scale(0.92); }
.toolbar-btn.disabled { opacity: 0.3; pointer-events: none; }
.bg-color-btn {
    width: 44px; height: 44px; border-radius: 50%;
    background: transparent !important; padding: 0;
    backdrop-filter: none; -webkit-backdrop-filter: none;
    display: none;
}
.bg-color-btn img { width: 44px; height: 44px; opacity: 1; }
:host([hub-mode]) .bg-color-btn { display: flex; }
.random-btn {
    width: 44px; height: 44px; border-radius: 50%; margin-bottom: 4px;
    background: rgba(25, 25, 25, 0.6);
}
.random-btn img { width: 24px; height: 24px; }
.toolbar-group {
    width: 44px; height: 148px; border-radius: 22px;
    background: rgba(25, 25, 25, 0.6);
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0;
}
.toolbar-group .toolbar-btn {
    width: 44px; height: 49px; border-radius: 0; background: transparent;
    backdrop-filter: none; -webkit-backdrop-filter: none;
}

/* 파츠 로딩 */
.part-item.loading { opacity: 0.5; pointer-events: none; }
.part-item.loading::after {
    content: ""; position: absolute; width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.2); border-top-color: #00bfff;
    border-radius: 50%; animation: editor-spin 0.6s linear infinite;
}
@keyframes editor-spin { to { transform: rotate(360deg); } }
@keyframes editor-slide-up { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }

/* 컬러 팔레트 */
.color-grid {
    flex: 1; overflow-x: hidden; overflow-y: scroll; padding: 14px 8px 14px 16px;
    margin-right: 4px;
    animation: editor-slide-up 0.25s ease-out;
    display: grid; grid-template-columns: repeat(5, 48px);
    gap: 18px; align-content: start; justify-content: center; justify-items: center;
}
.color-grid::-webkit-scrollbar { width: 4px; }
.color-grid::-webkit-scrollbar-track { background: transparent; }
.color-grid::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
.color-swatch {
    width: 48px; height: 48px; border-radius: 50%;
    border: none; cursor: pointer;
    position: relative; overflow: hidden;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.10);
    transition: transform 0.15s, box-shadow 0.2s;
}
.color-swatch:hover { transform: scale(1.08); }
.color-swatch:active { transform: scale(0.95); transition: transform 0.08s; }
.color-wrapper { position: relative; width: 48px; height: 48px; }
.color-wrapper.selected > .color-swatch { box-shadow: 0 0 0 3px #00AEF7; }
.color-check {
    position: absolute; top: -2px; right: -2px; z-index: 1;
    width: 20px; height: 20px; aspect-ratio: 1/1; border-radius: 50%;
    background: #00AEF7; display: none;
    align-items: center; justify-content: center; color: #fff;
    animation: editor-pop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.color-wrapper.selected > .color-check { display: flex; }

/* 2색 스와치 (대각선) */
.color-swatch.dual {
    background: linear-gradient(135deg, var(--c1) 75%, var(--c2) 75%);
}
.color-swatch.dual-vertical {
    background: linear-gradient(to right, var(--c1) 50%, var(--c2) 50%);
}

/* 블렌드셰이프 슬라이더 */
.slider-list {
    flex: 1; overflow-y: auto; padding: 20px 24px;
    display: flex; flex-direction: column; gap: 28px;
    align-items: stretch; justify-content: center;
    animation: editor-slide-up 0.25s ease-out;
}
.slider-item {
    display: flex; align-items: center; gap: 24px;
}
.slider-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: #3B3B3B;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
}
.slider-icon img { width: 20px; height: 20px; filter: brightness(10); }
.slider-track {
    flex: 1; height: 8px; background: rgba(255,255,255,0.15);
    border-radius: 4px; position: relative;
    touch-action: none;  /* 부모 .slider-list의 pan-y 덮어씀 */
}
.slider-track::before {
    content: ""; position: absolute;
    left: 50%; top: -8px; transform: translateX(-50%);
    width: 4px; height: 4px; border-radius: 50%;
    background: #fff;
}
.slider-fill {
    position: absolute; top: 0; height: 100%;
    background: rgba(150,200,240,0.5); border-radius: 4px;
}
.slider-thumb {
    position: absolute; top: 50%; width: 32px; height: 32px;
    border-radius: 50%; background: #fff; transform: translate(-50%, -50%);
    cursor: grab; box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    touch-action: none;  /* Android WebView에서 가로 드래그 끊김 방지 */
}

/* 확인/취소 바 (컬러/슬라이더 모드) — 플로팅 */
.confirm-bar {
    position: absolute; bottom: 24px; left: 24px; right: 24px; z-index: 5;
    display: flex; justify-content: space-between; padding: 0;
    animation: editor-slide-up 0.25s ease-out;
}
.confirm-btn {
    width: 40px; height: 40px; border: none; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background 0.15s, transform 0.1s;
}
.confirm-btn img { width: 24px; height: 24px; }
.confirm-btn:active { transform: scale(0.92); }
.confirm-btn.cancel { background: rgba(255,255,255,0.1); }
.confirm-btn.cancel:hover { background: rgba(255,255,255,0.16); }
.confirm-btn.ok { background: rgba(0,150,220,0.25); }
.confirm-btn.ok:hover { background: rgba(0,150,220,0.35); }

/* ── Compact (모바일) 레이아웃 ── */

/* 패널: 하단 고정 (트랜지션 없음 — 항상 보임) */
.editor-root.compact .editor-panel {
    position: absolute; left: 0; right: 0; bottom: 0; top: auto;
    width: 100%; height: 48%;
    border-radius: 16px 16px 0 0;
    transition: none;
}
.editor-root.compact .editor-panel.hidden {
    transform: none; opacity: 1; pointer-events: auto;
}
/* 캔버스: 패널 위 영역만 사용 */
.editor-root.compact canvas {
    height: 55% !important; width: 100% !important;
}

/* Exit/Save → 좌상단 X, 우상단 ✓ 원형 */
.editor-root.compact .footer-bar {
    position: absolute; top: calc(16px + var(--status-bar-h)); left: 16px; right: 16px; bottom: auto;
    justify-content: flex-end; padding: 0;
}
.editor-root.compact .footer-bar.hidden { opacity: 0; transform: none; pointer-events: none; }
.editor-root.compact .footer-btn {
    width: 40px; height: 40px; padding: 0; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0;
}
.editor-root.compact .footer-btn.exit {
    display: none !important;
}
.editor-root.compact .footer-btn.save {
    width: 72px; min-width: 72px; height: auto; padding: 8px 16px;
    border-radius: 999px; background: #597B87; color: #fff;
    font: 600 14px/normal -apple-system, sans-serif;
}

/* 툴바: compact에서 우측 세로 정렬 */
.editor-root.compact .view-toolbar {
    right: 12px; left: auto; top: auto; bottom: 49%; transform: none;
    flex-direction: column; align-items: center; gap: 8px;
}
.editor-root.compact .view-toolbar .bg-color-btn { display: none; }
.editor-root.compact .view-toolbar .random-btn { margin-bottom: 0; }

/* X 닫기 — compact: 좌상단 / hub-mode 데스크탑: 우상단 (기본 위치) */
.editor-root.compact .close-btn {
    display: flex; top: calc(16px + var(--status-bar-h)); left: 16px; right: auto;
}
.editor-root.compact .close-btn.hidden { display: none; }
:host([hub-mode]) .close-btn { display: flex; }
:host([hub-mode]) .close-btn.hidden { display: none; }

/* Edit 버튼 — compact에서 숨김 (항상 편집 모드) */
.editor-root.compact .edit-btn { display: none !important; }

/* 카테고리 탭 */
.editor-root.compact .category-bar {
    padding: 6px 8px 4px; height: 50px; gap: 0;
    overflow: hidden; flex-wrap: nowrap;
    justify-content: center;
}
.editor-root.compact .category-btn {
    flex: 1 1 0; height: 40px; padding: 4px 4px; min-width: 0;
}

/* 서브탭 */
.editor-root.compact .subtab-bar {
    padding: 6px 12px; height: 40px; gap: 4px;
}
.editor-root.compact .subtab-btn {
    font-size: 14px; font-weight: 400; height: 32px; padding: 0 12px;
}

/* 파츠 그리드 */
.editor-root.compact .parts-grid {
    padding: 6px 8px 6px 12px; gap: 6px; margin-right: 2px;
}
.editor-root.compact .part-item { height: 80px; }

/* 포즈 그리드 */
.editor-root.compact .parts-grid.pose-grid .part-item { height: 96px; }

/* 플로팅 버튼 (Colors/Custom) */
.editor-root.compact .floating-bar { bottom: 6px; left: 8px; right: 8px; }
.editor-root.compact .floating-btn { font-size: 14px; padding: 7px 14px 7px 10px; }

/* 컬러 그리드 */
.editor-root.compact .color-grid {
    padding: 10px 8px 10px 12px; gap: 14px;
    grid-template-columns: repeat(5, 42px);
}
.editor-root.compact .color-wrapper { width: 42px; height: 42px; }
.editor-root.compact .color-swatch { width: 42px; height: 42px; }

/* 슬라이더 */
.editor-root.compact .slider-list { padding: 14px 32px; gap: 22px; }
.editor-root.compact .slider-track { flex: 1; width: auto; }

/* 확인/취소 바 */
.editor-root.compact .confirm-bar { bottom: 16px; left: 16px; right: 16px; }

/* 패널 로딩 오버레이 (랜덤/파츠 로딩 중 패널 블록) */
.panel-loading {
    position: absolute; inset: 0; z-index: 10;
    background: rgba(38, 38, 38, 0.6);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
    border-radius: 16px;
}
.panel-loading .spinner {
    width: 24px; height: 24px;
    border: 3px solid rgba(255,255,255,0.15); border-top-color: rgba(255,255,255,0.6);
    border-radius: 50%; animation: editor-spin 0.7s linear infinite;
}
.panel-loading .panel-progress-bar {
    width: 160px; height: 4px; background: rgba(255,255,255,0.15); border-radius: 2px; overflow: hidden;
}
.panel-loading .panel-progress-fill {
    height: 100%; width: 0%; background: #fff; border-radius: 2px;
    transition: width 0.15s;
    box-shadow: 0 0 4px rgba(255,255,255,0.3);
}
.panel-loading .panel-loading-text {
    color: rgba(255,255,255,0.85); font: 600 14px/1.2 -apple-system, sans-serif;
    text-align: center; max-width: 200px;
}

/* 터치 기기: hover 효과 비활성화 (안드로이드에서 터치 시 hover 유지 문제) */
@media (hover: none) {
    .part-item:hover { background: #6A6A6A; }
    .part-item:hover img { transform: none; }
    .part-cell.selected .part-item:hover { background: #4E6C76; }
    .part-item.unequip:hover { background: #6A6A6A; }
    .color-swatch:hover { transform: none; }
    .floating-btn:hover { background: #3F5861; transform: none; box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25); }
    .subtab-btn:hover { color: rgba(255,255,255,0.4); background: transparent; }
}

/* filmOffset 제거 — compact에선 아바타 중앙 */

`;
class $p {
  constructor() {
    this.history = [], this.index = -1, this.capacity = 200, this._initialData = "", this._savedColorIndex = new Array(18).fill(0), this._dirty = /* @__PURE__ */ new Set();
  }
  // 변경된 카테고리
  init(e) {
    this.history = [e], this.index = 0, this._initialData = e, this._dirty.clear();
  }
  snapshot(e) {
    return this.index >= 0 && this.history[this.index] === e ? !1 : (this.history.splice(this.index + 1), this.history.push(e), this.history.length > this.capacity && this.history.shift(), this.index = this.history.length - 1, !0);
  }
  undo() {
    return this.index <= 0 ? null : this.history[--this.index];
  }
  redo() {
    return this.index >= this.history.length - 1 ? null : this.history[++this.index];
  }
  reset() {
    return this._initialData;
  }
  get canUndo() {
    return this.index > 0;
  }
  get canRedo() {
    return this.index < this.history.length - 1;
  }
  get hasChanges() {
    return this.index > 0;
  }
  get initialData() {
    return this._initialData;
  }
  get hasInitialData() {
    return this._initialData.length > 0;
  }
  saveColorIndex(e, t) {
    this._savedColorIndex[e] = t;
  }
  getColorIndex(e) {
    return this._savedColorIndex[e] ?? 0;
  }
  markDirty(e) {
    this._dirty.add(e);
  }
  isDirty(e) {
    return this._dirty.has(e);
  }
  clearDirty() {
    this._dirty.clear();
  }
}
const kt = class kt extends HTMLElement {
  constructor() {
    super(...arguments), this.clock = new So(), this.animFrameId = 0, this.resizeObserver = null, this.initialized = !1, this.mainTabs = [], this.partsData = {}, this.selectedTabIndex = 0, this.selectedSubTabIndex = 0, this.selectedParts = /* @__PURE__ */ new Map(), this.editorState = new $p(), this._baseUrl = "", this.editMode = "parts", this.backupColors = null, this.backupColorIndex = -1, this.backupBlendShapes = null, this.isDragging = !1, this.dragStartX = 0, this._dragStartY = 0, this._avatarDragY = 0, this.currentRotationY = Vt.degToRad(lt.avatar.rotationY), this.isEditMode = !1, this._wasPoseTab = !1, this._gridDragMoved = !1, this._scrollPositions = /* @__PURE__ */ new Map(), this._authToken = "", this._editorDataReady = Promise.resolve(), this.gradientState = null, this.tick = () => {
      var t, n;
      this.animFrameId = requestAnimationFrame(this.tick);
      const e = this.clock.getDelta();
      (t = this.viewer) == null || t.update(e), this.updateCameraLerp(), (n = this.composer) == null || n.render();
    }, this._panelLoading = null, this._panelProgressFill = null, this._panelLoadingText = null, this._lastW = 0, this._lastH = 0, this._cameraTarget = { y: lt.camera.positionY, z: lt.camera.positionZ, lookY: lt.camera.positionY - 0.25, filmOffset: 0 }, this._cameraLerping = !1, this._liveBlendShapes = /* @__PURE__ */ new Map();
  }
  static get observedAttributes() {
    return ["base-url", "width", "height", "compact", "hub-mode", "status-bar-height", "auto-load-default"];
  }
  /** 외부에서 dirty 상태 확인용 (예: 닫기 시 "저장 안 했는데 닫을래?" 팝업 트리거) */
  get hasChanges() {
    return this.editorState.hasChanges;
  }
  connectedCallback() {
    if (this.initialized) return;
    if (this.initialized = !0, this._baseUrl = this.getAttribute("base-url") ?? "", !document.querySelector("style[data-pretendard]")) {
      const se = this._baseUrl, H = document.createElement("style");
      H.setAttribute("data-pretendard", ""), H.textContent = `
                @font-face { font-family: 'Pretendard'; font-weight: 400; font-display: swap; src: url('${se}fonts/Pretendard-Regular.woff2') format('woff2'); }
                @font-face { font-family: 'Pretendard'; font-weight: 500; font-display: swap; src: url('${se}fonts/Pretendard-Medium.woff2') format('woff2'); }
                @font-face { font-family: 'Pretendard'; font-weight: 600; font-display: swap; src: url('${se}fonts/Pretendard-SemiBold.woff2') format('woff2'); }
            `, document.head.appendChild(H);
    }
    const e = this.attachShadow({ mode: "open" });
    e.innerHTML = `<style>${Kp}</style>`;
    const t = document.createElement("div");
    t.className = "editor-root", e.appendChild(t), this.canvas = document.createElement("canvas"), t.appendChild(this.canvas), this.loadingOverlay = document.createElement("div"), this.loadingOverlay.className = "loading-overlay", this.loadingOverlay.innerHTML = '<div class="spinner"></div><div class="progress-bar"><div class="progress-fill"></div></div>', this.progressFill = this.loadingOverlay.querySelector(".progress-fill"), t.appendChild(this.loadingOverlay), this.toolbar = document.createElement("div"), this.toolbar.className = "view-toolbar hidden";
    const n = this.toolbar;
    n.innerHTML = `
            <button class="toolbar-btn bg-color-btn" title="Background Color" style="margin-bottom:8px"><img src="${this._baseUrl}images/editor/ColorPicker.png"></button>
            <button class="toolbar-btn random-btn" title="Random"><img src="${this._baseUrl}images/editor/Dice_24.png"></button>
            <div class="toolbar-group">
                <button class="toolbar-btn" title="Reset View"><img src="${this._baseUrl}images/editor/Reset_24.png"></button>
                <button class="toolbar-btn" title="Undo"><img src="${this._baseUrl}images/editor/Undo_24.png"></button>
                <button class="toolbar-btn" title="Redo"><img src="${this._baseUrl}images/editor/Redo_24.png"></button>
            </div>
        `;
    const i = n.querySelectorAll(".toolbar-btn");
    this._resetBtn = i[2], this._undoBtn = i[3], this._redoBtn = i[4], i[0].addEventListener("click", () => this.setRandomBackgroundColor()), i[1].addEventListener("click", () => this.randomize()), this._resetBtn.addEventListener("click", () => {
      const se = this.editorState.reset();
      se && this.restoreFromJson(se), this.editorState.snapshot(se), this.updateToolbarState();
    }), this._undoBtn.addEventListener("click", () => {
      const se = this.editorState.undo();
      se && this.restoreFromJson(se), this.updateToolbarState();
    }), this._redoBtn.addEventListener("click", () => {
      const se = this.editorState.redo();
      se && this.restoreFromJson(se), this.updateToolbarState();
    }), t.appendChild(n);
    let s = !1;
    this.canvas.addEventListener("pointerdown", (se) => {
      se.button === 0 ? (this.isDragging = !0, this.dragStartX = se.clientX) : se.button === 2 && this.isEditMode && (s = !0, this._dragStartY = se.clientY);
    }), this.canvas.addEventListener("pointermove", (se) => {
      if (this.isDragging) {
        const H = se.clientX - this.dragStartX;
        this.dragStartX = se.clientX, this.currentRotationY += H * 5e-3, this.viewer.getAvatarRoot().rotation.y = this.currentRotationY;
      }
      if (s) {
        const H = se.clientY - this._dragStartY;
        this._dragStartY = se.clientY, this._avatarDragY = Math.max(-0.3, Math.min(0.3, this._avatarDragY - H * 2e-3)), this.viewer.getAvatarRoot().position.y = this._avatarDragY, this._groundMesh.position.y = this._avatarDragY;
      }
    }), this.canvas.addEventListener("pointerup", (se) => {
      se.button === 0 && (this.isDragging = !1), se.button === 2 && (s = !1);
    }), this.canvas.addEventListener("pointerleave", () => {
      this.isDragging = !1, s = !1;
    }), this.canvas.addEventListener("contextmenu", (se) => se.preventDefault()), this.canvas.addEventListener("wheel", (se) => {
      se.preventDefault();
      const H = 0.1, Z = se.deltaY > 0 ? -H : H;
      this.camera.position.z = Math.max(0.8, Math.min(4, this.camera.position.z - Z)), this._cameraTarget.z = this.camera.position.z;
    }, { passive: !1 }), this.editorPanel = document.createElement("div"), this.editorPanel.className = "editor-panel hidden", t.appendChild(this.editorPanel), this.categoryBar = document.createElement("div"), this.categoryBar.className = "category-bar", this.editorPanel.appendChild(this.categoryBar), this.subtabBar = document.createElement("div"), this.subtabBar.className = "subtab-bar", this.editorPanel.appendChild(this.subtabBar);
    const r = document.createElement("div");
    r.style.cssText = "position: relative; flex: 1; overflow: hidden; display: flex; flex-direction: column; touch-action: pan-y;", this.editorPanel.appendChild(r), this.partsGrid = document.createElement("div"), this.partsGrid.className = "parts-grid", r.appendChild(this.partsGrid);
    let o = 0;
    this._gridDragMoved = !1, this.partsGrid.addEventListener("pointerdown", () => {
      o = this.partsGrid.scrollTop, this._gridDragMoved = !1;
    }, { passive: !0 }), this.partsGrid.addEventListener("pointerup", () => {
      Math.abs(this.partsGrid.scrollTop - o) > 2 && (this._gridDragMoved = !0);
    }, { passive: !0 });
    let l = !1, c = 0, d = 0;
    this.partsGrid.addEventListener("mousedown", (se) => {
      se.target.closest(".slider-thumb") || (l = !0, c = se.clientY, d = this.partsGrid.scrollTop);
    }), this.partsGrid.addEventListener("mousemove", (se) => {
      if (!l) return;
      const H = se.clientY - c;
      Math.abs(H) > 3 && (this._gridDragMoved = !0), this._gridDragMoved && (this.partsGrid.scrollTop = d - H);
    }), this.partsGrid.addEventListener("mouseup", () => {
      l = !1;
    }), this.partsGrid.addEventListener("mouseleave", () => {
      l = !1;
    }), this.actionBar = document.createElement("div"), this.actionBar.className = "floating-bar", r.appendChild(this.actionBar), this.footer = document.createElement("div"), this.footer.className = "footer-bar hidden";
    const u = this.footer;
    u.innerHTML = `
            <button class="footer-btn exit">Exit</button>
            <button class="footer-btn save">Save</button>
        `, u.querySelector(".exit").addEventListener("click", () => this.exitEditMode()), u.querySelector(".save").addEventListener("click", async () => {
      this.setPanelLoading(!0), await new Promise((ae) => requestAnimationFrame(ae));
      const se = this.getData();
      this.editorState.clearDirty(), this.updateDirtyBadges();
      const H = await this.captureProfile(), Z = this.hasAttribute("hub-mode");
      try {
        if (Z) {
          const ae = await this.uploadGuestPreset(se, H);
          this.dispatchEvent(new CustomEvent("changed-avatar", { bubbles: !0, composed: !0, detail: ae }));
        } else {
          const ae = await this.uploadAvatar(se, H);
          this.dispatchEvent(new CustomEvent("changed-avatar", { bubbles: !0, composed: !0, detail: ae }));
        }
      } catch (ae) {
        console.error("[editor] upload failed:", ae), this.dispatchError("save_failed", "Avatar upload failed", ae);
      }
      this.setPanelLoading(!1), se && this.editorState.init(JSON.stringify(se)), this.selectedTabIndex = 0, this.selectedSubTabIndex = 0, this.hasAttribute("compact") || this.clientWidth < 500 ? (this.selectTab(0), this.updateToolbarState()) : this.exitEditMode(!0);
    }), t.appendChild(u), this.closeBtn = document.createElement("div"), this.closeBtn.className = "close-btn", this.closeBtn.innerHTML = `<img src="${this._baseUrl}images/editor/Close_24.png" style="width:24px;height:24px">`, this.closeBtn.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("state-changed", { bubbles: !0, composed: !0, detail: "CloseAvatarModal" }));
    }), t.appendChild(this.closeBtn), this.editBtn = document.createElement("div"), this.editBtn.className = "edit-btn", this.editBtn.innerHTML = `<img src="${this._baseUrl}images/editor/AvatarCostume_40.png" style="width:24px;height:24px"> Edit`, this.editBtn.addEventListener("click", () => this.enterEditMode()), t.appendChild(this.editBtn), this.setEditModeVisibility(!1), this.renderer = new of({ canvas: this.canvas, antialias: !0 });
    const h = this.hasAttribute("compact") || this.clientWidth < 500;
    this.renderer.setPixelRatio(h ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio), this.renderer.toneMapping = 1, this.renderer.toneMappingExposure = lt.toneMappingExposure, this.renderer.outputColorSpace = mt, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = 2, this.scene = new Zs();
    const f = lt.camera;
    this.camera = new yt(f.fov, 1, 0.1, 100), this.camera.position.set(0, f.positionY, f.positionZ), this.camera.lookAt(0, f.positionY - 0.25, 0), this.camera.filmOffset = 0, this.camera.rotation.x = Vt.degToRad(f.rotationX);
    const g = lt.mainLight, _ = new ua(new re(g.color), g.intensity);
    _.target.position.set(0, 0, 0), this.scene.add(_.target), _.position.copy($r(g.rotation)), _.castShadow = !0;
    const p = lt.shadow;
    _.shadow.mapSize.set(p.mapSize, p.mapSize), _.shadow.bias = p.bias, _.shadow.normalBias = p.normalBias, _.shadow.camera.near = p.cameraNear, _.shadow.camera.far = p.cameraFar, _.shadow.camera.left = p.cameraLeft, _.shadow.camera.right = p.cameraRight, _.shadow.camera.top = p.cameraTop, _.shadow.camera.bottom = p.cameraBottom, this.scene.add(_);
    const m = lt.rimLight, x = new ua(new re(m.color), m.intensity);
    x.position.copy($r(m.rotation)), this.scene.add(x);
    const v = lt.ambient, T = new Nf(new re(v.color), v.intensity);
    this.scene.add(T), this._groundMesh = new bt(
      new ni(6, 6),
      new _f({ opacity: p.groundOpacity })
    );
    const E = this._groundMesh;
    E.rotation.x = -Math.PI / 2, E.position.y = 0, E.receiveShadow = !0, this.scene.add(E);
    const R = parseInt(this.getAttribute("width") || "0"), w = parseInt(this.getAttribute("height") || "0");
    R && (this.style.width = R + "px"), w && (this.style.height = w + "px");
    const D = this.clientWidth || 800, Y = this.clientHeight || 600;
    this.renderer.setSize(D, Y, !1), this.camera.aspect = D / Y, this.camera.updateProjectionMatrix();
    const b = window.devicePixelRatio || 1, y = lt.gradient, B = new Rt(D * b, Y * b), G = new Zs(), V = new Ri(-1, 1, 1, -1, 0, 1), j = { value: new re(y.color) };
    G.add(new bt(new ni(2, 2), new vt({
      uniforms: {
        gradientColor: j,
        highlightIntensity: { value: y.highlightIntensity },
        highlightPosition: { value: new De(...y.highlightPosition) },
        highlightSize: { value: y.highlightSize },
        highlightSoftness: { value: y.highlightSoftness },
        shadowIntensity: { value: y.shadowIntensity },
        shadowPosition: { value: new De(...y.shadowPosition) },
        shadowSize: { value: y.shadowSize },
        overallContrast: { value: y.overallContrast },
        colorSaturation: { value: y.colorSaturation },
        directionalInfluence: { value: y.directionalInfluence }
      },
      vertexShader: "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `
                uniform vec3 gradientColor;
                uniform float highlightIntensity; uniform vec2 highlightPosition; uniform float highlightSize; uniform float highlightSoftness;
                uniform float shadowIntensity; uniform vec2 shadowPosition; uniform float shadowSize;
                uniform float overallContrast; uniform float colorSaturation; uniform float directionalInfluence;
                varying vec2 vUv;
                float smoothRadial(vec2 uv, vec2 center, float sz, float soft) { float d = distance(uv, center); float g = exp(-d * sz); return pow(g, 1.0 / soft); }
                float dirGrad(vec2 uv) { return smoothstep(0.0, 1.0, (uv.x + 1.0 - uv.y) * 0.5); }
                void main() {
                    vec2 uv = vUv;
                    float hl = smoothRadial(uv, highlightPosition, highlightSize, highlightSoftness) * highlightIntensity;
                    float sh = 1.0 - smoothRadial(uv, shadowPosition, shadowSize, 1.0);
                    sh = mix(1.0, shadowIntensity, sh);
                    float dir = mix(0.5, dirGrad(uv), directionalInfluence);
                    float c = dir * sh;
                    c = 1.0 - (1.0 - c) * (1.0 - hl);
                    c = pow(clamp(c, 0.0, 1.0), 1.0 / overallContrast);
                    vec3 sat = mix(vec3(c), gradientColor, colorSaturation);
                    vec3 col = mix(sat, vec3(1.0), c);
                    gl_FragColor = vec4(col, 1.0);
                }
            `
    }))), this.renderer.setRenderTarget(B), this.renderer.render(G, V), this.renderer.setRenderTarget(null), B.texture.colorSpace = mt, this.scene.background = B.texture, this.gradientState = { rt: B, scene: G, camera: V, colorUniform: j };
    const O = new Rt(D * b, Y * b, { type: 1016, samples: 4 });
    this.composer = new ep(this.renderer, O), this.composer.addPass(new tp(this.scene, this.camera));
    const K = lt.bloom, z = new ri(new De(D * b, Y * b), K.strength, K.radius, K.threshold);
    this.composer.addPass(z), z.materialHighPassFilter.fragmentShader = `
            uniform sampler2D tDiffuse;
            uniform vec3 defaultColor;
            uniform float defaultOpacity;
            uniform float luminosityThreshold;
            uniform float smoothWidth;
            varying vec2 vUv;
            void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
                float v = dot(texel.xyz, vec3(0.2126, 0.7152, 0.0722));
                float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
                vec4 extracted = mix(outputColor, texel, alpha);
                extracted *= (1.0 + texel.a * ${K.emissiveBoost.toFixed(2)});
                gl_FragColor = extracted;
            }
        `, z.materialHighPassFilter.needsUpdate = !0;
    const ie = lt.liftGammaGain;
    this.composer.addPass(new To(new vt({
      uniforms: { tDiffuse: { value: null }, uInvGamma: { value: new P(...ie.invGamma) }, uGain: { value: new P(...ie.gain) } },
      vertexShader: "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform sampler2D tDiffuse; uniform vec3 uInvGamma; uniform vec3 uGain; varying vec2 vUv;
                void main() {
                    vec3 c = texture2D(tDiffuse, vUv).rgb;
                    float peak = max(max(c.r, c.g), c.b);
                    if (peak > 1.0) { c *= (1.0 + log(peak)) / peak; c = clamp(c, 0.0, 1.0); }
                    c = uGain * pow(c, uInvGamma);
                    gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
                }`
    }))), this.composer.addPass(new sp());
    const ce = new ra(this.renderer), ge = new Zs();
    ge.background = new re(lt.envMapColor), this.scene.environment = ce.fromScene(ge).texture, ce.dispose();
    const Ne = this.getAttribute("base-url") ?? "";
    this.viewer = new ma(this.scene, {
      baseUrl: Ne,
      onProgress: (se) => {
        this.progressFill && (this.progressFill.style.width = `${se}%`);
      }
    }), this.viewer.getAvatarRoot().rotation.y = Vt.degToRad(lt.avatar.rotationY), this.updateSize(), this.updateCompactMode(), this.resizeObserver = new ResizeObserver(() => {
      this.updateSize(), this.updateCompactMode();
    }), this.resizeObserver.observe(this), this.tick(), this._editorDataReady = this.loadEditorData(), this.hasAttribute("auto-load-default") && this._editorDataReady.then(() => {
      this.initialized && this.loadPreset(null).catch((se) => {
        this.dispatchError("load_failed", "auto-load-default failed", se);
      });
    }).catch(() => {
    });
  }
  disconnectedCallback() {
    var e, t, n;
    this.animFrameId && cancelAnimationFrame(this.animFrameId), (e = this.resizeObserver) == null || e.disconnect(), (t = this.viewer) == null || t.clearAvatar(), (n = this.renderer) == null || n.dispose(), this.initialized = !1;
  }
  attributeChangedCallback(e, t, n) {
    this.initialized && ((e === "width" || e === "height") && this.updateSize(), e === "compact" && this.updateCompactMode(), e === "status-bar-height" && this.style.setProperty("--status-bar-h", n ? n + "px" : "0px"));
  }
  // ── Public API ──
  async loadAvatar(e) {
    if (this._authToken = e.token || "", e.backgroundColorInt && this.gradientState) {
      const n = e.backgroundColorInt, i = (n >> 16 & 255) / 255, s = (n >> 8 & 255) / 255, r = (n & 255) / 255;
      this.gradientState.colorUniform.value.setRGB(i, s, r), this.renderer.setRenderTarget(this.gradientState.rt), this.renderer.render(this.gradientState.scene, this.gradientState.camera), this.renderer.setRenderTarget(null);
    }
    this.loadingOverlay.classList.remove("hidden"), this.progressFill.style.width = "0%", this.viewer.getAvatarRoot().visible = !1;
    try {
      const n = this.getApiBase(), i = {};
      this._authToken && (i.Authorization = `Token ${this._authToken}`);
      const s = await fetch(`${n}/accounts/${e.userId}/avatar-json/`, { headers: i });
      if (!s.ok)
        throw (s.status === 401 || s.status === 403) && this.dispatchError("auth_required", `Auth required (HTTP ${s.status})`, new Error(`HTTP ${s.status}`)), new Error(`API error: ${s.status}`);
      const r = await s.json();
      r.avatar_json ? await this.loadPreset(JSON.parse(r.avatar_json)) : await this.loadPreset(null);
    } catch (n) {
      throw this.loadingOverlay.classList.add("hidden"), this.dispatchError("load_failed", "Failed to load avatar", n), n;
    }
    this.viewer.getAvatarRoot().visible = !0, this.loadingOverlay.classList.add("hidden"), (this.hasAttribute("compact") || this.clientWidth < 500) && !this.isEditMode && this.enterEditMode();
  }
  setRandomBackgroundColor() {
    if (!this.gradientState) return;
    const e = this.constructor.BG_COLORS, t = e[Math.floor(Math.random() * e.length)];
    this.gradientState.colorUniform.value.set(t), this.renderer.setRenderTarget(this.gradientState.rt), this.renderer.render(this.gradientState.scene, this.gradientState.camera), this.renderer.setRenderTarget(null);
  }
  static pickMsg(e) {
    const t = kt.LOADING_MSGS[e];
    return t ? t[Math.floor(Math.random() * t.length)] : "Working on it...";
  }
  async randomize() {
    var l, c, d;
    let e = 0;
    for (const u of this.mainTabs) for (const h of u.subTabs) h.partType !== 17 && e++;
    let t = 0;
    this.setPanelLoading(!0, "Getting ready... 🎲", 0), this.viewer.setBlendShapes([]);
    const n = {
      0: 10,
      2: 1,
      8: 85,
      10: 90,
      11: 90,
      12: 95,
      13: 95,
      14: 95,
      15: 95,
      16: 95
    }, i = (u) => Math.random() * 100 < u;
    for (const u of this.mainTabs)
      for (const h of u.subTabs) {
        if (h.partType === 17) continue;
        const f = Object.entries(this.partsData).filter(([x, v]) => x !== "_meta" && v.category === h.partType).sort((x, v) => (x[1].order ?? 0) - (v[1].order ?? 0));
        if (f.length === 0) continue;
        const g = n[h.partType] ?? 90;
        if (h.canUnequip && i(g)) {
          this.selectedParts.set(h.partType, ""), await this.viewer.swapPart(h.partType, "", []), t++, this.updatePanelLoading(kt.pickMsg(h.partType), Math.round(t / e * 100));
          continue;
        }
        const [_, p] = f[Math.floor(Math.random() * f.length)];
        if (this.selectedParts.set(h.partType, _), ((l = p == null ? void 0 : p.blendShapes) == null ? void 0 : l.length) > 0) {
          const x = /* @__PURE__ */ new Map(), v = this.getData();
          if (v != null && v.blendShapes)
            for (const T of v.blendShapes) x.set(T.type, T.value);
          for (const T of p.blendShapes) x.set(T.type, T.value);
          this.viewer.setBlendShapes(Array.from(x, ([T, E]) => ({ type: T, value: E })));
        }
        let m;
        if (((c = p.colors) == null ? void 0 : c.length) > 0) {
          let x = p.colors.length;
          h.partType === 1 && i(90) && (x = Math.min(10, p.colors.length));
          const v = Math.floor(Math.random() * x);
          m = (d = p.colors[v]) == null ? void 0 : d.colors, this.editorState.saveColorIndex(h.partType, v);
        }
        this.updatePanelLoading(kt.pickMsg(h.partType), Math.round(t / e * 100)), await this.viewer.swapPart(h.partType, _, m, {
          useVolumeMask: p == null ? void 0 : p.useVolumeMask,
          applySubColorToEx: p == null ? void 0 : p.applySubColorToEx,
          useDefaultHairCapMount: p == null ? void 0 : p.useDefaultHairCapMount,
          capMountBone: p == null ? void 0 : p.capMountBone,
          animationTrigger: p == null ? void 0 : p.animationTrigger
        }), t++;
      }
    this.enableShadows();
    const s = this.getData();
    s && this.editorState.snapshot(JSON.stringify(s)), this.updateToolbarState();
    const r = this.mainTabs[this.selectedTabIndex], o = r == null ? void 0 : r.subTabs[this.selectedSubTabIndex];
    o && this.buildPartsGrid(o), this.setPanelLoading(!1);
  }
  async loadPreset(e) {
    var i, s, r, o, l, c, d;
    try {
      e && ((i = e.PresetPartsDatas) == null ? void 0 : i.length) > 0 ? await this.viewer.loadAvatarFromData(e) : await this.viewer.start();
    } catch (u) {
      throw (s = this.loadingOverlay) == null || s.classList.add("hidden"), this.dispatchError("load_failed", "loadPreset failed", u), u;
    }
    (r = this.loadingOverlay) == null || r.classList.add("hidden");
    const t = (o = this.viewer) == null ? void 0 : o.getAvatarRoot();
    t && (t.visible = !0), this.enableShadows();
    const n = this.getData();
    if (n && this.editorState.init(JSON.stringify(n)), n)
      for (const u of n.PresetPartsDatas) {
        this.selectedParts.set(u.Category, u.ID);
        const h = this.partsData[u.ID];
        if (((l = h == null ? void 0 : h.colors) == null ? void 0 : l.length) > 0 && ((d = (c = u.Color) == null ? void 0 : c.colors) == null ? void 0 : d.length) > 0) {
          const f = (_, p) => _.length !== p.length ? !1 : _.every((m, x) => Math.abs(m.r - p[x].r) < 0.01 && Math.abs(m.g - p[x].g) < 0.01 && Math.abs(m.b - p[x].b) < 0.01), g = h.colors.findIndex((_) => f(_.colors, u.Color.colors));
          g >= 0 && this.editorState.saveColorIndex(u.Category, g);
        }
      }
    this.dispatchEvent(new CustomEvent("state-changed", { bubbles: !0, composed: !0, detail: "AvatarLoaded" }));
  }
  getData() {
    return this.viewer.currentAvatarData ?? null;
  }
  setRotationY(e) {
    this.currentRotationY = Vt.degToRad(e), this.viewer.getAvatarRoot().rotation.y = this.currentRotationY;
  }
  updateToolbarState() {
    this._undoBtn.classList.toggle("disabled", !this.editorState.canUndo), this._redoBtn.classList.toggle("disabled", !this.editorState.canRedo), this._resetBtn.classList.toggle("disabled", !this.editorState.canUndo);
  }
  setPanelLoading(e, t = "", n = -1) {
    if (e) {
      this._panelLoading || (this._panelLoading = document.createElement("div"), this._panelLoading.className = "panel-loading", this._panelLoading.innerHTML = '<div class="spinner"></div><div class="panel-progress-bar"><div class="panel-progress-fill"></div></div><div class="panel-loading-text"></div>', this._panelProgressFill = this._panelLoading.querySelector(".panel-progress-fill"), this._panelLoadingText = this._panelLoading.querySelector(".panel-loading-text"), this.editorPanel.appendChild(this._panelLoading));
      const i = n >= 0;
      this._panelLoading.querySelector(".spinner").style.display = i ? "none" : "", this._panelLoading.querySelector(".panel-progress-bar").style.display = i ? "" : "none", this._panelLoadingText && (this._panelLoadingText.style.display = t ? "" : "none", this._panelLoadingText.textContent = t), i && this._panelProgressFill && (this._panelProgressFill.style.width = `${n}%`), this.toolbar.style.pointerEvents = "none", this.toolbar.style.opacity = "0.4", this.footer.style.pointerEvents = "none", this.footer.style.opacity = "0.4";
    } else
      this._panelLoading && (this._panelLoading.remove(), this._panelLoading = null, this._panelProgressFill = null, this._panelLoadingText = null), this.toolbar.style.pointerEvents = "", this.toolbar.style.opacity = "", this.footer.style.pointerEvents = "", this.footer.style.opacity = "";
  }
  updatePanelLoading(e, t) {
    this._panelProgressFill && (this._panelProgressFill.style.width = `${t}%`), this._panelLoadingText && (this._panelLoadingText.textContent = e);
  }
  setCategoryEnabled(e) {
    this.categoryBar.style.pointerEvents = e ? "" : "none", this.categoryBar.style.opacity = e ? "" : "0.4", this.subtabBar.style.pointerEvents = e ? "" : "none", this.subtabBar.style.opacity = e ? "" : "0.4", this.footer.style.pointerEvents = e ? "" : "none", this.footer.style.opacity = e ? "" : "0.4", this.toolbar.style.pointerEvents = e ? "" : "none", this.toolbar.style.opacity = e ? "" : "0.4";
  }
  setEditModeVisibility(e) {
    const t = this.hasAttribute("compact") || this.clientWidth < 500;
    this.editorPanel.classList.toggle("hidden", !e), this.toolbar.classList.toggle("hidden", !e), this.footer.classList.toggle("hidden", !e), this.editBtn.classList.toggle("hidden", e);
    const n = t || this.hasAttribute("hub-mode");
    this.closeBtn.classList.toggle("hidden", n ? !1 : e);
  }
  async enterEditMode() {
    this.isEditMode = !0, this._wasPoseTab = !1, this.viewer.playPose("Pose_Idle"), this.setEditModeVisibility(!0), this.updateSize(), await this._editorDataReady, setTimeout(() => {
      if (this.mainTabs.length > 0 && this.selectTab(this.selectedTabIndex), !this.editorState.hasInitialData) {
        const e = this.getData();
        e && this.editorState.init(JSON.stringify(e));
      }
      this.updateToolbarState();
    }, 200);
  }
  exitEditMode(e = !1) {
    !e && this.editorState.hasChanges && this.restoreFromJson(this.editorState.initialData), this.isEditMode = !1, this.selectedTabIndex = 0, this.selectedSubTabIndex = 0, this.setEditModeVisibility(!1);
    const t = lt.camera;
    this.hasAttribute("compact") || this.clientWidth < 500 ? this._cameraTarget = { y: t.positionY, z: 2.8, lookY: t.positionY - 0.25, filmOffset: 0 } : this._cameraTarget = { y: t.positionY, z: t.positionZ, lookY: t.positionY - 0.25, filmOffset: 0 }, this._cameraLerping = !0, this.currentRotationY = Vt.degToRad(lt.avatar.rotationY), this.viewer.getAvatarRoot().rotation.y = this.currentRotationY, this._avatarDragY = 0, this.viewer.getAvatarRoot().position.y = 0, this._groundMesh.position.y = 0;
    const i = this.selectedParts.get(17) ?? "", s = this.partsData[i];
    s != null && s.animationTrigger && this.viewer.playPose(s.animationTrigger), this._lastW = 0, this._lastH = 0, this.updateSize();
  }
  /** 프로필 이미지 업로드 + 아바타 JSON PATCH → thumbnailUrl 반환 (인증 케이스) */
  async uploadAvatar(e, t) {
    const n = this.getApiBase(), i = {};
    this._authToken && (i.Authorization = `Token ${this._authToken}`);
    const s = new FormData();
    s.append("upload_file", t, "avatar-profile.png");
    const r = await fetch(`${n}/upload/`, { method: "POST", headers: i, body: s });
    if (!r.ok) throw new Error(`Upload failed: ${r.status}`);
    const { url: o } = await r.json(), l = await fetch(`${n}/accounts/user/`, {
      method: "PATCH",
      headers: { ...i, "Content-Type": "application/json" },
      body: JSON.stringify({
        avatar_json: e ? JSON.stringify(e) : "",
        avatar_img_url: o,
        is_public_avatar: !0
      })
    });
    if (!l.ok) throw new Error(`PATCH failed: ${l.status}`);
    return console.log("[editor] avatar uploaded, thumbnailUrl:", o), o;
  }
  /**
   * 게스트(hub-mode) 저장 — POST /avatar-preset/ 로 multipart 업로드.
   * Unity 게스트 흐름과 동일: avatar_json + 썸네일 + (사용 안 하는) full_img_file.
   * Auth 없음. 응답 { avatar_preset_uuid } 반환.
   * full body 이미지는 더 이상 사용 안 함 → 1x1 투명 PNG placeholder.
   */
  async uploadGuestPreset(e, t) {
    const n = this.getApiBase(), i = new FormData();
    i.append("avatar_json", e ? JSON.stringify(e) : ""), i.append("avatar_img_file", t, "avatar-profile.png"), i.append("avatar_full_img_file", kt.makeBlankPng(), "blank.png");
    const s = await fetch(`${n}/avatar-preset/`, { method: "POST", body: i });
    if (!s.ok) {
      const l = await s.text().catch(() => "");
      throw new Error(`Guest preset upload failed: ${s.status} ${l}`);
    }
    const { avatar_preset_uuid: r } = await s.json(), o = URL.createObjectURL(t);
    return console.log("[editor] guest preset uploaded, uuid:", r), { uuid: r, thumbnailUrl: o };
  }
  getApiBase() {
    return (location.hostname === "localhost" || location.hostname === "127.0.0.1") && location.port === "3001" ? "/api-proxy" : "https://dev-api.fuzeapp.services";
  }
  static makeBlankPng() {
    if (!kt._blankPngBytes) {
      const t = atob("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="), n = new Uint8Array(t.length);
      for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
      kt._blankPngBytes = n;
    }
    return new Blob([kt._blankPngBytes], { type: "image/png" });
  }
  /** editor-error 이벤트 발사 헬퍼 */
  dispatchError(e, t, n) {
    const i = n instanceof Error ? n : new Error(String(n));
    this.dispatchEvent(new CustomEvent("editor-error", {
      bubbles: !0,
      composed: !0,
      detail: { type: e, message: t, error: i }
    }));
  }
  /** 프로필 캡쳐: Head 본 기준 카메라로 512x512 렌더 → 256x256 Blob */
  async captureProfile(e) {
    const i = (e == null ? void 0 : e.fov) ?? 27, s = (e == null ? void 0 : e.dist) ?? 1.01, r = (e == null ? void 0 : e.camY) ?? 0.2, o = (e == null ? void 0 : e.camX) ?? 0.15, l = (e == null ? void 0 : e.lookY) ?? 0.16, c = (e == null ? void 0 : e.lookX) ?? 0;
    this.viewer.setEyeBlinkPaused(!0);
    const d = this.viewer.getAvatarRoot(), u = d.rotation.y, h = this.viewer.forceIdlePose();
    d.rotation.y = Vt.degToRad(lt.avatar.rotationY), d.updateMatrixWorld(!0);
    const f = this.viewer.getBone("Bip001_Head"), g = new P(0, 1.45, 0);
    f && f.getWorldPosition(g);
    const _ = new yt(i, 1, 0.01, 10);
    _.position.set(
      g.x + o,
      g.y + r,
      g.z + s
    ), _.lookAt(
      g.x + c,
      g.y + l,
      g.z
    ), _.updateMatrixWorld(!0);
    const p = new Rt(512, 512), m = this.scene.background, x = this.renderer.toneMapping, v = this.renderer.toneMappingExposure, T = this.renderer.outputColorSpace;
    this.renderer.toneMapping = 0, this.renderer.toneMappingExposure = 1, this.renderer.outputColorSpace = dt, this.scene.background = new re(0), this.renderer.setRenderTarget(p), this.renderer.clear(), this.renderer.render(this.scene, _);
    const E = new Uint8Array(512 * 512 * 4);
    this.renderer.readRenderTargetPixels(p, 0, 0, 512, 512, E), this.scene.background = new re(16777215), this.renderer.setRenderTarget(p), this.renderer.clear(), this.renderer.render(this.scene, _);
    const R = new Uint8Array(512 * 512 * 4);
    this.renderer.readRenderTargetPixels(p, 0, 0, 512, 512, R), this.renderer.setRenderTarget(null), p.dispose(), this.scene.background = m, this.renderer.toneMapping = x, this.renderer.toneMappingExposure = v, this.renderer.outputColorSpace = T, d.rotation.y = u, h && h(), this.viewer.setEyeBlinkPaused(!1);
    const w = (V) => V <= 31308e-7 ? V * 12.92 : 1.055 * Math.pow(V, 1 / 2.4) - 0.055, D = new Uint8ClampedArray(512 * 512 * 4);
    for (let V = 0; V < 512 * 512; V++) {
      const j = V * 4, O = 1 - (R[j] - E[j]) / 255;
      if (O < 4e-3)
        D[j] = D[j + 1] = D[j + 2] = D[j + 3] = 0;
      else {
        const K = Math.min(1, E[j] / 255 / O), z = Math.min(1, E[j + 1] / 255 / O), ie = Math.min(1, E[j + 2] / 255 / O);
        D[j] = Math.round(w(K) * 255), D[j + 1] = Math.round(w(z) * 255), D[j + 2] = Math.round(w(ie) * 255), D[j + 3] = Math.min(255, Math.round(O * 255));
      }
    }
    const Y = document.createElement("canvas");
    Y.width = 512, Y.height = 512;
    const b = Y.getContext("2d"), y = b.createImageData(512, 512);
    for (let V = 0; V < 512; V++) {
      const j = (511 - V) * 512 * 4, O = V * 512 * 4;
      y.data.set(D.subarray(j, j + 512 * 4), O);
    }
    b.putImageData(y, 0, 0);
    const B = document.createElement("canvas");
    return B.width = 256, B.height = 256, B.getContext("2d").drawImage(Y, 0, 0, 256, 256), new Promise((V) => {
      B.toBlob((j) => V(j), "image/png");
    });
  }
  updateSize() {
    const e = parseInt(this.getAttribute("width") || "0"), t = parseInt(this.getAttribute("height") || "0");
    e && this.style.width !== e + "px" && (this.style.width = e + "px"), t && this.style.height !== t + "px" && (this.style.height = t + "px");
    const n = this.clientWidth || 800, s = this.hasAttribute("compact") || n < 500 ? Math.round((this.clientHeight || 600) * 0.55) : this.clientHeight || 600;
    (n !== this._lastW || s !== this._lastH) && (this._lastW = n, this._lastH = s, this.renderer.setSize(n, s, !1), this.composer.setSize(n, s)), this.camera.aspect = n / s;
    const r = this.hasAttribute("compact") || n < 500;
    if (this.isEditMode && !r && n > 500) {
      const l = Vt.degToRad(this.camera.fov * 0.5);
      this._cameraTarget.filmOffset = 424 * this.camera.filmGauge * Math.tan(l) / s;
    } else
      this._cameraTarget.filmOffset = 0;
    this._cameraLerping = !0, this.camera.updateProjectionMatrix();
  }
  updateCompactMode() {
    var s;
    const e = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".editor-root");
    if (!e) return;
    const t = this.hasAttribute("compact") || this.clientWidth < 500;
    e.classList.toggle("compact", t), this.classList.toggle("compact-mode", t), t && !this.hasAttribute("status-bar-height") ? this.style.setProperty("--status-bar-h", "0px") : t || this.style.setProperty("--status-bar-h", "0px");
    const n = e.querySelector(".footer-btn.exit"), i = e.querySelector(".footer-btn.save");
    n && (n.innerHTML = t ? `<img src="${this._baseUrl}images/editor/Close_24.png" style="width:24px;height:24px">` : "Exit"), i && (i.innerHTML = t ? `<img src="${this._baseUrl}images/editor/Confirm_24.png" style="width:24px;height:24px">` : "Save"), t && (this._cameraTarget.filmOffset = 0, this.isEditMode || (this._cameraTarget.z = 2.8), this._cameraLerping = !0);
  }
  async restoreFromJson(e) {
    var u, h;
    const t = JSON.parse(e), n = this.getData(), i = /* @__PURE__ */ new Map();
    for (const f of t.PresetPartsDatas) {
      const g = this.partsData[f.ID];
      i.set(f.Category, {
        id: f.ID,
        colors: (u = f.Color) == null ? void 0 : u.colors,
        options: {
          useVolumeMask: g == null ? void 0 : g.useVolumeMask,
          applySubColorToEx: g == null ? void 0 : g.applySubColorToEx,
          useDefaultHairCapMount: g == null ? void 0 : g.useDefaultHairCapMount,
          capMountBone: g == null ? void 0 : g.capMountBone,
          blendShapes: g == null ? void 0 : g.blendShapes,
          animationTrigger: g == null ? void 0 : g.animationTrigger
        }
      });
    }
    const s = /* @__PURE__ */ new Map();
    if (n)
      for (const f of n.PresetPartsDatas)
        s.set(f.Category, { id: f.ID, colors: (h = f.Color) == null ? void 0 : h.colors });
    const r = [];
    for (const [f, g] of i) {
      const _ = s.get(f), p = !_ || _.id !== g.id, m = JSON.stringify(_ == null ? void 0 : _.colors) !== JSON.stringify(g.colors);
      (p || m) && r.push(this.viewer.swapPart(f, g.id, g.colors, g.options).catch(() => {
      }));
    }
    for (const [f] of s)
      i.has(f) || r.push(this.viewer.swapPart(f, "", []).catch(() => {
      }));
    const o = JSON.stringify((n == null ? void 0 : n.blendShapes) ?? []), l = JSON.stringify(t.blendShapes ?? []);
    o !== l && t.blendShapes && this.viewer.setBlendShapes(t.blendShapes), r.length > 0 && (await Promise.all(r), this.enableShadows()), this.selectedParts.clear();
    for (const f of t.PresetPartsDatas)
      this.selectedParts.set(f.Category, f.ID);
    const c = this.mainTabs[this.selectedTabIndex], d = c == null ? void 0 : c.subTabs[this.selectedSubTabIndex];
    d && this.buildPartsGrid(d);
  }
  enableShadows() {
    this.scene.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    });
  }
  async loadEditorData() {
    var t;
    const e = this.getAttribute("base-url") ?? "";
    try {
      const n = await fetch(`${e}partsdata.json`);
      if (!n.ok) throw new Error(`partsdata.json HTTP ${n.status}`);
      const i = await n.json();
      this.partsData = i, this.mainTabs = ((t = i._meta) == null ? void 0 : t.mainTabs) ?? [], this.buildCategoryTabs(), this.mainTabs.length > 0 && this.selectTab(0);
    } catch (n) {
      throw console.error("[Editor] partsdata.json 로드 실패:", n), this.dispatchError("load_failed", "Failed to load editor data (partsdata.json)", n), n;
    }
  }
  buildCategoryTabs() {
    const e = this.getAttribute("base-url") ?? "";
    this.categoryBar.innerHTML = "", this.mainTabs.forEach((t, n) => {
      const i = document.createElement("button");
      i.className = "category-btn" + (n === this.selectedTabIndex ? " active" : ""), i.innerHTML = t.tabIcon ? `<img src="${e}images/editor/${t.tabIcon}" alt="${t.tabName}"><span class="badge"></span>` : `<span style="font-size:11px;color:#aaa">${t.tabName}</span><span class="badge"></span>`, i.onclick = () => this.selectTab(n), this.categoryBar.appendChild(i);
    });
  }
  selectTab(e) {
    var i;
    const t = (i = this.mainTabs[this.selectedTabIndex]) == null ? void 0 : i.subTabs[this.selectedSubTabIndex];
    t && this._scrollPositions.set(t.partType, this.partsGrid.scrollTop), this.selectedTabIndex = e, this.selectedSubTabIndex = -1, this.categoryBar.querySelectorAll(".category-btn").forEach((s, r) => {
      s.classList.toggle("active", r === e);
    });
    const n = this.mainTabs[e];
    this.buildSubTabs(n.subTabs), n.subTabs.length > 0 && this.selectSubTab(0);
  }
  buildSubTabs(e) {
    this.subtabBar.innerHTML = "", this.subtabBar.style.display = "flex", e.forEach((t, n) => {
      const i = document.createElement("button");
      let s = "subtab-btn";
      n === this.selectedSubTabIndex && (s += " active"), this.editorState.isDirty(t.partType) && (s += " dirty"), i.className = s, i.innerHTML = `${t.tabName}<span class="dot"></span>`, i.onclick = () => this.selectSubTab(n), this.subtabBar.appendChild(i);
    });
  }
  selectSubTab(e) {
    var r;
    if (this.selectedSubTabIndex === e && this.partsGrid.children.length > 0) return;
    const t = (r = this.mainTabs[this.selectedTabIndex]) == null ? void 0 : r.subTabs[this.selectedSubTabIndex];
    t && this._scrollPositions.set(t.partType, this.partsGrid.scrollTop), this.selectedSubTabIndex = e, this.subtabBar.querySelectorAll(".subtab-btn").forEach((o, l) => {
      o.classList.toggle("active", l === e);
    });
    const i = this.mainTabs[this.selectedTabIndex].subTabs[e];
    if (!i) return;
    if (this.isEditMode) {
      const o = i.partType === 17;
      if (o && !this._wasPoseTab) {
        const l = this.selectedParts.get(17) ?? "", c = this.partsData[l];
        c != null && c.animationTrigger && this.viewer.playPose(c.animationTrigger);
      } else !o && this._wasPoseTab && this.viewer.playPose("Pose_Idle");
      this._wasPoseTab = o;
    }
    this._scrollPositions.has(i.partType) ? (this.buildPartsGrid(i, !1), this.partsGrid.scrollTop = this._scrollPositions.get(i.partType)) : this.buildPartsGrid(i, !0), this.buildActionBar(i), this.switchCamera(i.partType);
  }
  buildPartsGrid(e, t = !0) {
    const n = this.getAttribute("base-url") ?? "";
    this.partsGrid.innerHTML = "", this.partsGrid.className = "parts-grid";
    const i = e.partType === 17;
    if (this.partsGrid.classList.toggle("pose-grid", i), i || (this.partsGrid.style.gridTemplateColumns = "repeat(4, 1fr)"), e.canUnequip) {
      const r = document.createElement("div");
      r.className = "part-item unequip", r.innerHTML = `<img src="${n}images/editor/Unequip_24.png">`, r._partId = "", r.onclick = () => this.onPartClick(e, ""), this.partsGrid.appendChild(r);
    }
    const s = Object.entries(this.partsData).filter(([r, o]) => r !== "_meta" && o.category === e.partType).sort((r, o) => (r[1].order ?? 0) - (o[1].order ?? 0));
    for (const [r, o] of s) {
      const l = document.createElement("div");
      l.className = "part-cell", this.selectedParts.get(e.partType) === r && l.classList.add("selected");
      const c = document.createElement("div");
      c.className = "part-item";
      const d = document.createElement("img");
      d.src = `${n}avatar/icons/${r}.png`, d.alt = r, d.loading = "lazy", d.onerror = () => {
        d.style.display = "none";
      }, c.appendChild(d), l.appendChild(c);
      const u = document.createElement("span");
      u.className = "check", u.innerHTML = `<img src="${n}images/editor/Confirm_24.png" style="width:14px;height:14px">`, l.appendChild(u), l._partId = r, l.onclick = () => this.onPartClick(e, r), this.partsGrid.appendChild(l);
    }
    t && requestAnimationFrame(() => {
      const r = this.partsGrid.querySelector(".part-cell.selected");
      r && (this.partsGrid.scrollTop = Math.max(0, r.offsetTop - 10));
    });
  }
  buildActionBar(e) {
    var o;
    if (this.actionBar.innerHTML = "", e.partType === 17) {
      this.actionBar.classList.add("hidden"), this.partsGrid.style.paddingBottom = "6px";
      return;
    }
    const t = this.getAttribute("base-url") ?? "";
    let n = !1;
    const i = this.selectedParts.get(e.partType) ?? "", s = this.partsData[i];
    if (i && ((o = s == null ? void 0 : s.colors) == null ? void 0 : o.length) > 0) {
      const l = document.createElement("button");
      l.className = "floating-btn", l.innerHTML = `<img src="${t}images/editor/ColorPalette_24.png" style="width:16px;height:16px"> Colors`, l.onclick = () => this.openColors(e), this.actionBar.appendChild(l), n = !0;
    }
    if (e.customItems && e.customItems.length > 0) {
      const l = document.createElement("button");
      l.className = "floating-btn", l.innerHTML = `<img src="${t}images/editor/Custom_24.png" style="width:16px;height:16px"> Custom`, !!(s != null && s.disableCustomItems) ? (l.disabled = !0, l.style.opacity = "0.3", l.style.cursor = "not-allowed") : l.onclick = () => this.openCustom(e), this.actionBar.appendChild(l), n = !0;
    }
    this.actionBar.classList.toggle("hidden", !n), this.partsGrid.style.paddingBottom = n ? "60px" : "6px";
  }
  async onPartClick(e, t) {
    var i, s, r;
    if (this._gridDragMoved) return;
    this.setPanelLoading(!0), await new Promise((o) => requestAnimationFrame(o)), this.selectedParts.set(e.partType, t), this.partsGrid.querySelectorAll(".part-cell").forEach((o) => {
      var l;
      o.classList.remove("selected"), (l = o.querySelector(".part-item")) == null || l.classList.remove("loading");
    });
    const n = Array.from(this.partsGrid.querySelectorAll(".part-cell")).find((o) => o._partId === t);
    n && (n.classList.add("selected"), (i = n.querySelector(".part-item")) == null || i.classList.add("loading"));
    try {
      if (t === "")
        await this.viewer.swapPart(e.partType, "", []);
      else {
        const o = this.partsData[t], l = [0, 1, 2, 3, 5, 11];
        let c;
        if (l.includes(e.partType)) {
          const u = this.editorState.getColorIndex(e.partType);
          ((s = o == null ? void 0 : o.colors) == null ? void 0 : s.length) > 0 && u < o.colors.length && (c = o.colors[u].colors);
        } else ((r = o == null ? void 0 : o.colors) == null ? void 0 : r.length) > 0 && (c = o.colors[0].colors, this.editorState.saveColorIndex(e.partType, 0));
        const d = {
          useVolumeMask: o == null ? void 0 : o.useVolumeMask,
          applySubColorToEx: o == null ? void 0 : o.applySubColorToEx,
          useDefaultHairCapMount: o == null ? void 0 : o.useDefaultHairCapMount,
          capMountBone: o == null ? void 0 : o.capMountBone,
          blendShapes: o == null ? void 0 : o.blendShapes,
          animationTrigger: o == null ? void 0 : o.animationTrigger
        };
        await this.viewer.swapPart(e.partType, t, c, d), this.enableShadows();
      }
    } catch (o) {
      console.error("[onPartClick] swapPart error:", o);
    }
    if (e.partType !== 17) {
      const o = this.getData();
      o && this.editorState.snapshot(JSON.stringify(o)), this.editorState.markDirty(e.partType), this.updateDirtyBadges();
    }
    this.buildPartsGrid(e, !1), this.buildActionBar(e), this.updateToolbarState(), this.setPanelLoading(!1);
  }
  switchCamera(e) {
    if (!this.isEditMode) return;
    const t = this._cameraTarget.filmOffset, n = this.hasAttribute("compact") || this.clientWidth < 500, i = [0, 1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16], s = this._compactCameraOverride;
    if (i.includes(e))
      if (n) {
        const r = s == null ? void 0 : s.face;
        this._cameraTarget = { y: (r == null ? void 0 : r.y) ?? 0.9, z: (r == null ? void 0 : r.z) ?? 1.1, lookY: (r == null ? void 0 : r.lookY) ?? 1, filmOffset: 0 };
      } else
        this._cameraTarget = { y: 1.05, z: 1.5, lookY: 0.85, filmOffset: t };
    else if (n) {
      const r = s == null ? void 0 : s.body;
      this._cameraTarget = { y: (r == null ? void 0 : r.y) ?? 0.94, z: (r == null ? void 0 : r.z) ?? 2.1, lookY: (r == null ? void 0 : r.lookY) ?? 0.6, filmOffset: 0 };
    } else
      this._cameraTarget = { y: lt.camera.positionY, z: lt.camera.positionZ, lookY: lt.camera.positionY - 0.25, filmOffset: t };
    this._avatarDragY = 0, this.viewer.getAvatarRoot().position.y = 0, this._groundMesh.position.y = 0, this._cameraLerping = !0;
  }
  updateCameraLerp() {
    if (!this._cameraLerping) return;
    const e = this._cameraTarget, t = 0.1;
    this.camera.position.y += (e.y - this.camera.position.y) * t, this.camera.position.z += (e.z - this.camera.position.z) * t, this.camera.filmOffset += (e.filmOffset - this.camera.filmOffset) * t, this.camera.updateProjectionMatrix(), this.camera.lookAt(0, e.lookY, 0), Math.abs(this.camera.position.y - e.y) < 1e-3 && Math.abs(this.camera.position.z - e.z) < 1e-3 && Math.abs(this.camera.filmOffset - e.filmOffset) < 1e-3 && (this.camera.position.y = e.y, this.camera.position.z = e.z, this.camera.filmOffset = e.filmOffset, this._cameraLerping = !1);
  }
  openColors(e) {
    var r, o;
    this.editMode = "colors";
    const t = this.getAttribute("base-url") ?? "", n = this.selectedParts.get(e.partType) ?? "", i = this.partsData[n];
    if (!i || !((r = i.colors) != null && r.length)) return;
    this.setCategoryEnabled(!1);
    const s = this.editorState.getColorIndex(e.partType);
    this.backupColors = ((o = i.colors[s]) == null ? void 0 : o.colors) ?? null, this.backupColorIndex = s, this.partsGrid.className = "color-grid", this.partsGrid.style.cssText = "", this.partsGrid.innerHTML = "", i.colors.forEach((l, c) => {
      const d = document.createElement("div"), u = l.colors[0], h = `rgb(${Math.round(u.r * 255)},${Math.round(u.g * 255)},${Math.round(u.b * 255)})`;
      if (l.secondaryColorIndex >= 0 && l.secondaryColorIndex < l.colors.length) {
        const _ = l.colors[l.secondaryColorIndex], p = `rgb(${Math.round(_.r * 255)},${Math.round(_.g * 255)},${Math.round(_.b * 255)})`, x = [6, 7, 9].includes(e.partType) ? "dual" : "dual-vertical";
        d.className = `color-swatch ${x}`, d.style.cssText = `--c1:${h};--c2:${p}`;
      } else
        d.className = "color-swatch", d.style.background = h;
      const f = document.createElement("div");
      f.className = "color-wrapper" + (c === s ? " selected" : ""), f.appendChild(d);
      const g = document.createElement("span");
      g.className = "color-check", g.innerHTML = `<img src="${t}images/editor/Confirm_24.png" style="width:14px;height:14px">`, f.appendChild(g), f.onclick = () => {
        const _ = this.partsData[n];
        this.viewer.swapPart(e.partType, n, l.colors, { applySubColorToEx: _ == null ? void 0 : _.applySubColorToEx }), this.partsGrid.querySelectorAll(".color-wrapper").forEach((p) => p.classList.remove("selected")), f.classList.add("selected"), this.editorState.saveColorIndex(e.partType, c);
      }, this.partsGrid.appendChild(f);
    }), this.actionBar.className = "confirm-bar", this.actionBar.classList.remove("hidden"), this.actionBar.innerHTML = `
            <button class="confirm-btn cancel"><img src="${this._baseUrl}images/editor/Close_24.png"></button>
            <button class="confirm-btn ok"><img src="${this._baseUrl}images/editor/Confirm_24.png"></button>
        `, this.actionBar.querySelector(".cancel").addEventListener("click", () => this.closeSubPanel(e, !1)), this.actionBar.querySelector(".ok").addEventListener("click", () => this.closeSubPanel(e, !0));
  }
  openCustom(e) {
    var s;
    if (!((s = e.customItems) != null && s.length)) return;
    this.editMode = "custom", this.setCategoryEnabled(!1);
    const t = this.getAttribute("base-url") ?? "", n = this.getData();
    this.backupBlendShapes = n != null && n.blendShapes ? [...n.blendShapes] : [], this._liveBlendShapes.clear();
    for (const r of this.backupBlendShapes)
      this._liveBlendShapes.set(r.type, r.value);
    this.partsGrid.className = "slider-list", this.partsGrid.innerHTML = "";
    const i = /* @__PURE__ */ new Map();
    if (this.backupBlendShapes)
      for (const r of this.backupBlendShapes) i.set(r.type, r.value);
    for (const r of e.customItems) {
      const o = i.get(r.positiveType) ?? 0, l = i.get(r.negativeType) ?? 0;
      let c = 0.5;
      o > 0 ? c = 0.5 + o / 100 * 0.5 : l > 0 && (c = 0.5 - l / 100 * 0.5);
      const d = document.createElement("div");
      d.className = "slider-item";
      const u = document.createElement("div");
      u.className = "slider-icon", u.innerHTML = `<img src="${t}images/editor/${r.icon}">`, d.appendChild(u);
      const h = document.createElement("div");
      h.className = "slider-track";
      const f = document.createElement("div");
      f.className = "slider-fill", c >= 0.5 ? (f.style.left = "50%", f.style.width = `${(c - 0.5) * 100}%`) : (f.style.left = `${c * 100}%`, f.style.width = `${(0.5 - c) * 100}%`), h.appendChild(f);
      const g = document.createElement("div");
      g.className = "slider-thumb", g.style.left = `${c * 100}%`, h.appendChild(g), d.appendChild(h), this.partsGrid.appendChild(d);
      let _ = !1;
      const p = (m) => {
        if (!_) return;
        const x = h.getBoundingClientRect();
        let v = Math.max(0, Math.min(1, (m.clientX - x.left) / x.width));
        Math.abs(v - 0.5) < 0.02 && (v = 0.5), g.style.left = `${v * 100}%`, v >= 0.5 ? (f.style.left = "50%", f.style.width = `${(v - 0.5) * 100}%`) : (f.style.left = `${v * 100}%`, f.style.width = `${(0.5 - v) * 100}%`), this.applySliderValue(r, v);
      };
      g.addEventListener("pointerdown", (m) => {
        _ = !0, g.setPointerCapture(m.pointerId);
      }), g.addEventListener("pointermove", p), g.addEventListener("pointerup", () => {
        _ = !1;
      });
    }
    this.actionBar.className = "confirm-bar", this.actionBar.classList.remove("hidden"), this.actionBar.innerHTML = `
            <button class="confirm-btn cancel"><img src="${this._baseUrl}images/editor/Close_24.png"></button>
            <button class="confirm-btn ok"><img src="${this._baseUrl}images/editor/Confirm_24.png"></button>
        `, this.actionBar.querySelector(".cancel").addEventListener("click", () => this.closeSubPanel(e, !1)), this.actionBar.querySelector(".ok").addEventListener("click", () => this.closeSubPanel(e, !0));
  }
  applySliderValue(e, t) {
    if (!e) return;
    if (t >= 0.5) {
      const i = (t - 0.5) * 2 * 100;
      this._liveBlendShapes.set(e.positiveType, i), this._liveBlendShapes.set(e.negativeType, 0), e.hasSymmetry && e.positiveTypeEx && e.negativeTypeEx && (this._liveBlendShapes.set(e.positiveTypeEx, i), this._liveBlendShapes.set(e.negativeTypeEx, 0));
    } else {
      const i = (0.5 - t) * 2 * 100;
      this._liveBlendShapes.set(e.negativeType, i), this._liveBlendShapes.set(e.positiveType, 0), e.hasSymmetry && e.positiveTypeEx && e.negativeTypeEx && (this._liveBlendShapes.set(e.negativeTypeEx, i), this._liveBlendShapes.set(e.positiveTypeEx, 0));
    }
    const n = [];
    for (const [i, s] of this._liveBlendShapes)
      n.push({ type: i, value: s });
    this.viewer.setBlendShapes(n);
  }
  closeSubPanel(e, t) {
    if (t) {
      const n = this.getData();
      n && this.editorState.snapshot(JSON.stringify(n)), this.editorState.markDirty(e.partType);
    } else {
      const n = this.selectedParts.get(e.partType) ?? "";
      this.editMode === "colors" && this.backupColors && n ? (this.viewer.swapPart(e.partType, n, this.backupColors), this.backupColorIndex >= 0 && this.editorState.saveColorIndex(e.partType, this.backupColorIndex)) : this.editMode === "custom" && this.backupBlendShapes && this.viewer.setBlendShapes(this.backupBlendShapes);
    }
    this.editMode = "parts", this.partsGrid.className = "parts-grid", this.buildPartsGrid(e), this.actionBar.className = "floating-bar", this.buildActionBar(e), this.setCategoryEnabled(!0), this.updateDirtyBadges();
  }
  updateDirtyBadges() {
    this.categoryBar.querySelectorAll(".category-btn").forEach((t, n) => {
      var r;
      const i = this.mainTabs[n], s = (r = i == null ? void 0 : i.subTabs) == null ? void 0 : r.some((o) => this.editorState.isDirty(o.partType));
      t.classList.toggle("dirty", !!s);
    });
    const e = this.mainTabs[this.selectedTabIndex];
    e && this.subtabBar.querySelectorAll(".subtab-btn").forEach((t, n) => {
      const i = e.subTabs[n];
      i && t.classList.toggle("dirty", this.editorState.isDirty(i.partType));
    });
  }
};
kt.BG_COLORS = [
  "#AD4242",
  "#C65C48",
  "#BB6628",
  "#D9AC46",
  "#F5C774",
  "#E0C2A5",
  "#816234",
  "#8A7C68",
  "#CCC294",
  "#E3D872",
  "#979932",
  "#9AC580",
  "#8DA383",
  "#5F6D26",
  "#70A943",
  "#529A68",
  "#3F7C66",
  "#1B8990",
  "#76CBC1",
  "#9BBDDD",
  "#3D9BBF",
  "#0B739C",
  "#1B8990",
  "#76CBC1",
  "#9BBDDD",
  "#3D9BBF",
  "#0B739C",
  "#286399",
  "#94A1E1",
  "#4C5DBE",
  "#6C48AA",
  "#9955BC",
  "#C9A4DA",
  "#A13A71",
  "#89586A"
], kt.LOADING_MSGS = {
  0: ["Styling the hair ✂️", "Bad hair day? Never! 💇", "Blow drying... 💨", "Which style today? 🤔"],
  1: ["Putting on a new face 🎭", "Face swap! 🔄", "New look, who dis? 😎"],
  2: ["Shaping the brows 🖌️", "Brow game strong 💪", "On fleek! ✨"],
  3: ["Picking the perfect eyes 👀", "Eye see you 👁️", "Choosing a vibe 🌟"],
  4: ["Choosing a nose 👃", "Boop! 👆", "Nose job in progress 🏥"],
  5: ["Finding the right smile 😁", "Say cheese! 📸", "Grin loading... 😬"],
  6: ["Trying on a top 👕", "Drip check 💧", "Fashion moment 🔥", "Does this look good? 🪞"],
  7: ["Pulling up the pants 👖", "Leg day! 🦵", "Bottoms up! 👇"],
  8: ["Picking a hat 🧢", "Cap or no cap? 🎩", "Hat trick! 🪄"],
  9: ["Lacing up shoes 👟", "Sneaker head mode 🏃", "Fresh kicks! 🔥"],
  10: ["Trying on glasses 🕶️", "Looking smart 🤓", "Shade check 😎"],
  11: ["Growing a beard 🧔", "Facial hair magic 🪄", "Manly vibes 💪"],
  12: ["Adding some character ✨", "Aging gracefully 👴", "Wisdom marks ⭐"],
  13: ["A little blush 🌸", "Rosy cheeks! 🥰", "Feeling cute 💕"],
  14: ["Getting creative 🎨", "Artistic touch 🖼️", "Painted! 🎭"],
  15: ["Battle scars loading ⚔️", "War stories 🛡️", "Looking tough 💥"],
  16: ["Freckles incoming 🌟", "Sun-kissed ☀️", "Spotted! 🐾"]
}, kt._blankPngBytes = null;
let ga = kt;
customElements.define("oz-avatar-editor", ga);
