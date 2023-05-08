import {
  ColorPicker,
  Group,
  Popover,
  Space,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { Pencil2Icon } from "@radix-ui/react-icons";
import React, { Dispatch, SetStateAction } from "react";

import { getReadableColor } from "../../helpers/generator-helpers";
import { ColorBlock } from "../../types";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface ColorBlockProps {
  sectionHeightString: string;
  blockIndex: number;
  colorBlockValues: ColorBlock[];
  setColorBlockValues: Dispatcher<ColorBlock[]>;
}
const ColorBlockSection = (props: ColorBlockProps) => {
  return (
    <Group
      bg={props.colorBlockValues[props.blockIndex].colorValue}
      position="apart"
      align="center"
      sx={{
        width: "100%",
        height: props.sectionHeightString,
      }}
    >
      <Group>
        <Space w="20px" />
        <Text
          size="30px"
          color={getReadableColor(
            props.colorBlockValues[props.blockIndex].colorValue
          )}
        >
          {props.colorBlockValues[props.blockIndex].colorValue}
        </Text>
      </Group>
      <Popover width={300} trapFocus position="left">
        <Popover.Target>
          <UnstyledButton
            sx={{
              width: "10%",
              height: "50%",
            }}
          >
            <Group position="center">
              <Pencil2Icon
                width="35%"
                height="35%"
                color={getReadableColor(
                  props.colorBlockValues[props.blockIndex].colorValue
                )}
              />
            </Group>
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown
          sx={(theme) => ({
            align: "center",
            justifyContent: "center",
            background: `rgba(0,0,0,0)`,
            border: "none",
          })}
        >
          <Group position="center">
            <ColorPicker
              value={props.colorBlockValues[props.blockIndex].colorValue}
              sx={{ width: "100%", height: "100%" }}
              onChange={(color: string) => {
                const updatedBlocks: ColorBlock[] = props.colorBlockValues.map(
                  (block) => {
                    if (block.index === props.blockIndex) {
                      return { ...block, colorValue: color };
                    }
                    return block;
                  }
                );
                props.setColorBlockValues(updatedBlocks);
              }}
            />
          </Group>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
};
export default ColorBlockSection;
