'use client'
import HandleComponent from "@/components/HandleComponent";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import NextImage from 'next/image'
import { Rnd } from 'react-rnd'

interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
      <div className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        
        {/* this div ensures that the aspect ration is maintained */}
        <div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
        {/* z-50 given to make the image border pop up above the shadow */}
        <AspectRatio
            ratio={896 / 1831}
            className='pointer-events-none relative z-50 aspect-[896/1831] w-full'>
            <NextImage
              fill
              alt='phone image'
              src='/phone-template.png'
              className='pointer-events-none z-50 select-none'
            />
          </AspectRatio>
          {/* outside */}
          {/* a shadow that has a large spread, convering the entire container with z-40 */}
          <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
          {/* inside */}

          {/* hard coded absolute color background positioned such that it matches with transparent phone img */}
          {/* no height given, aspect ratio defined in parent component */}
          <div
            className={cn(
              'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]',
              // `bg-${options.color.tw}`
              `bg-blue-950`
            )}
          />
        </div>


            {/* the draggable logic */}
            {/* use rnd: draggable library */}
            <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
          className='absolute z-20 border-[3px] border-primary'  
          >
            <div className='relative w-full h-full'>
            <NextImage
              src={imageUrl}
              fill
              alt='your image'
              className='pointer-events-none'
            />
          </div>
          </Rnd>
      </div>
    </div>
  );
};

export default DesignConfigurator;
