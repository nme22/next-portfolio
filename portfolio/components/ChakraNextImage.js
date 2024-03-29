import * as React from 'react';
import NextImage from 'next/image';
import { useImage } from 'use-cloudinary';
import { Box, chakra } from '@chakra-ui/react';

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'unoptimized',
      'onError',
    ].includes(prop),
});

export default function Image({
  // Cloudinary Props
  publicId,
  transformations = [],
  cloudName,
  storageType,

  // Next Image props
  src,
  width,
  height,
  alt,

  // Everything else
  fallback,
  ...rest
}) {
  const [imageSrc, setImageSrc] = React.useState('');
  const { generateImageUrl } = useImage(cloudName);

  React.useEffect(() => {
    if (cloudName && publicId) {
      // This is checking for a local fallback in the publicId
      if (publicId.indexOf('/') === 0) {
        setImageSrc(publicId);
      } else {
        setImageSrc(
          generateImageUrl({
            delivery: {
              publicId,
              storageType: storageType ? storageType : 'upload',
            },
            transformation: [
              // Auto apply best format and quality transformations -- tweak where needed
              {
                format: 'auto',
                quality: 'auto',
                secure: true,
              },
              ...transformations,
            ],
          })
        );
      }
    } else if (src) {
      setImageSrc(src);
    }
  }, []);

  return (
    imageSrc && (
      <Box pos="relative">
        <ChakraNextImage
          src={imageSrc}
          w="auto"
          h="auto"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={imageSrc}
          alt={alt}
          {...rest}
        />
      </Box>
    )
  );
}
// Allows imports from both chakra & next.js for Images
