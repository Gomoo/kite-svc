import React, { useState, useRef, ReactElement, cloneElement, Children } from "react";

interface StepsProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  done?: (data?: any) => void;
}

interface StepWrapperProps {
  slideIndex: number;
  slideDirection: "left" | "right";
  initialPos: number;
  isVisible: boolean;
  children: React.ReactNode;
}

interface StepChildProps {
  next: (pos?: number) => void;
  back: (pos?: number) => void;
  done: (data?: any) => void;
  render: boolean;
  slideIndex: number;
  isVisible: boolean;
  forceRender: () => void;
}

const StepWrapper: React.FC<StepWrapperProps> = ({
  slideIndex,
  slideDirection,
  initialPos,
  isVisible,
  children,
}) => {
  const initialPosRef = useRef(initialPos);

  let currentPos = initialPosRef.current;

  if (isVisible) {
    currentPos = 0;
  } else {
    currentPos = initialPosRef.current;
    if (slideDirection === "left" && slideIndex > initialPosRef.current) {
      currentPos = -120;
    } else if (slideDirection === "right" && slideIndex < initialPosRef.current) {
      currentPos = 120;
    }
  }

  return (
    <div
      className={`absolute top-0 h-auto w-full transition-all duration-200 ease-linear ${isVisible ? "relative opacity-100" : "hidden opacity-0"} `}
      style={{
        right: `${currentPos}%`,
        transitionProperty: "right, opacity, height",
        transitionDuration: "0.2s, 0.1s, 0.4s",
        transitionTimingFunction: "linear, linear, linear",
      }}
    >
      <div className="relative z-[0.2]">{children}</div>
    </div>
  );
};

const Steps: React.FC<StepsProps> = ({ children, style = {}, done }) => {
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left");
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [render, setRender] = useState<boolean>(false);

  const next = (pos?: number): void => {
    setSlideIndex(pos !== undefined ? pos : slideIndex + 1);
    setSlideDirection("left");
  };

  const back = (pos?: number): void => {
    const newIndex = pos !== undefined ? pos : slideIndex - 1;
    if (newIndex >= 0) {
      setSlideIndex(newIndex);
      setSlideDirection("right");
    }
  };

  const handleDone = (data?: any): void => {
    if (done) {
      done(data);
    }
    setSlideIndex(0);
  };

  const forceRender = (): void => {
    setRender((prev) => !prev);
  };

  return (
    <section
      className="relative w-full overflow-hidden transition-[height] duration-300"
      style={{
        height: "fit-content",
        ...style,
      }}
    >
      {Children.map(children, (child, idx) => {
        if (React.isValidElement(child)) {
          return (
            <StepWrapper
              slideIndex={slideIndex}
              slideDirection={slideDirection}
              initialPos={idx}
              isVisible={slideIndex === idx}
            >
              {cloneElement(child as ReactElement<StepChildProps>, {
                next,
                back,
                done: handleDone,
                render,
                slideIndex,
                isVisible: slideIndex === idx,
                forceRender,
              })}
            </StepWrapper>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Steps;
