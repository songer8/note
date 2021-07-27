import React, { useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { DownOutlined } from '@ant-design/icons';
import cn from 'classnames';
import './index.css';
const { GradientPickerPopover } = require('react-linear-gradient-picker');

interface IPickerParam {
  onSelect?: Function;
  color?: string;
  opacity?: number;
}

interface IGradientColor {
  colors: any[]
  angle: number
}

interface IGradientColorInput {
  value?: IGradientColor
  onChange?: Function;
  className?: string;
}

const rgbToRgba = (rgb: string, a = 1) =>
  rgb.replace('rgb(', 'rgba(').replace(')', `, ${a})`);

const initialPalette = [
  {
    offset: '0.00',
    color: '#fff',
    opacity: 1,
  }, {
    offset: '1.00',
    color: '#fff',
    opacity: 1,
  }
];

const WrappedSketchPicker = ({ onSelect, ...rest }: IPickerParam) => {
  return (
    <SketchPicker
      {...rest}
      color={rgbToRgba(String(rest.color), rest.opacity)}
      onChange={c => {
        const { r, g, b, a } = c.rgb;
        onSelect && onSelect(`rgb(${r}, ${g}, ${b})`, a);
      }}
    />
  );
};

const GradientColorInput: React.FunctionComponent<IGradientColorInput> =
  props => {
    const { value, onChange, className } = props;
    const [open, setOpen] = useState(false);
    const [angle, setAngle] = useState(value?.angle);
    const gradientColorsRef = useRef(value?.colors);

    // 渐变角度变化不会触发onChange，因此补传；
    useEffect(() => {
      passBack(gradientColorsRef.current, angle);
    }, [angle])

    const onPaletteChange = (colors: any) => {
      gradientColorsRef.current = colors;
      passBack(colors, angle);
    }

    // 回传 form.item
    const passBack = (colors: any, angle: any) => {
      const result = {
        colors,
        angle
      }
      console.log(result);
      onChange && onChange(result);
    }

    let palette = initialPalette;
    if (value && value.colors) {
      palette = [
        {
          offset: value.colors[0].offset,
          color: value.colors[0].color,
          opacity: value.colors[0].opacity,
        },
        {
          offset: value.colors[1].offset,
          color: value.colors[1].color,
          opacity: value.colors[1].opacity,
        }
      ]
    }

    return (
      <div className={cn('gradientColorInput', className)}>
        <GradientPickerPopover
          {...{
            open,
            setOpen,
            angle,
            setAngle,
            showAnglePicker: true,
            width: 220,
            maxStops: 3,
            paletteHeight: 32,
            palette,
            // onchange
            onPaletteChange
          }}
        >
          <WrappedSketchPicker />
        </GradientPickerPopover>
        <DownOutlined className="down" />
      </div>
    );
  };

export default GradientColorInput;
