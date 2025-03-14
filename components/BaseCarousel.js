import { useWindowDimensions } from 'react-native';
import { useRef } from 'react';

// Carousel library component imports
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

function BaseCarousel({ data, renderItem, style }) {
    const { width } = useWindowDimensions();
    const ref = useRef(null);
    const progress = useSharedValue(0);

    const onPressPagination = (index) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <>
            <Carousel
                ref={ref}
                style={style}
                // 20 is the container padding
                // TODO: fix this
                width={width - 2 * 16}
                height={width * 2 / 5}
                data={data}
                onProgressChange={progress}
                renderItem={renderItem}
            />
            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </>
    )
}

export default BaseCarousel;