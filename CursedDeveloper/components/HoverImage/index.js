import React, { useState, useRef, useEffect } from 'react'


const HoverImage = ({ parentClassName, imageClassName, filterClassName, borderClassName, showFilter, showBorder, src, videoSrc }) => {
    const [isHovering, setIsHovering] = useState(false)
    const videoRef = useRef(null)
    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        setIsHovering(true)
        if (videoRef.current && videoSrc) {
            videoRef.current.currentTime = 0
            videoRef.current.play()

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.pause()
                }
            }, 5000)
        }
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <div
            className={`ai-hover-image ${parentClassName}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showBorder && (
                <div className={`ai-hover-image-border ${borderClassName}`} />
            )}
            {showFilter && !isHovering && !videoSrc && (
                <div className={`ai-hover-image-filter ${filterClassName}`} />
            )}
            {videoSrc && isHovering && (
                <video
                    ref={videoRef}
                    className={`ai-hover-video ${imageClassName}`}
                    muted
                    playsInline
                />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                alt={src}
                className={`ai-hover-profile ${imageClassName}`}
                src={src}
                style={{
                    visibility: videoSrc && isHovering ? 'hidden' : 'visible'
                }}
            />

        </div>
    )
}

HoverImage.propTypes = {}

export default HoverImage
