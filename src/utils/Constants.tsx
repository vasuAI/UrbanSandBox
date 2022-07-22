import Color from './Color';

const Constants = {
  passwordRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  emailRegex:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const colorArray = [
  Color.paleLavender,
  Color.beige,
  Color.lightKhaki,
  Color.duckEggBlue,
  Color.veryLightPink,
  Color.beige,
  Color.lightKhaki,
  Color.duckEggBlue,
];
export default {Constants, colorArray};
