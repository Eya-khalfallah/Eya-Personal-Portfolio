import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const marginVw = 4 // Left margin as 6.5vw
        const lineSpacingVw = 21 // Spacing for lines as 20vw

        class Diamond {
            constructor(x, ascending) {
                this.x = x
                this.y = ascending ? canvas.height : 0
                this.speed = 0.5
                this.ascending = ascending
            }

            draw() {
                const size = 6

                // Draw the vertical line
                ctx.beginPath()
                ctx.moveTo(this.x, 0)
                ctx.lineTo(this.x, canvas.height)
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
                ctx.stroke()

                // Draw the diamond
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.beginPath()
                ctx.moveTo(0, -size)
                ctx.lineTo(size, 0)
                ctx.lineTo(0, size)
                ctx.lineTo(-size, 0)
                ctx.closePath()

                // Create gradient for glow effect
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2)
                gradient.addColorStop(0, '#c57284')
                gradient.addColorStop(0.5, 'rgba(197, 114, 132, 0.3)')
                gradient.addColorStop(1, 'rgba(197, 114, 132, 0)')

                ctx.fillStyle = '#c57284'
                ctx.fill()
                ctx.restore()
            }

            update() {
                if (this.ascending) {
                    this.y -= this.speed
                    if (this.y < 0) {
                        this.y = canvas.height
                    }
                } else {
                    this.y += this.speed
                    if (this.y > canvas.height) {
                        this.y = 0
                    }
                }
            }
        }

        const vwToPx = (vw) => (vw / 100) * window.innerWidth

        const marginLeft = vwToPx(marginVw)

        const diamonds = [
            new Diamond(marginLeft + vwToPx(lineSpacingVw) * 1, false),
            new Diamond(marginLeft + vwToPx(lineSpacingVw) * 2, true),
            new Diamond(marginLeft + vwToPx(lineSpacingVw) * 3, false),
            new Diamond(marginLeft + vwToPx(lineSpacingVw) * 4, true)
        ]

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            diamonds.forEach(diamond => {
                diamond.draw()
                diamond.update()
            })
            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            const newMarginLeft = vwToPx(marginVw)

            diamonds[0].x = newMarginLeft + vwToPx(lineSpacingVw) * 1
            diamonds[1].x = newMarginLeft + vwToPx(lineSpacingVw) * 2
            diamonds[2].x = newMarginLeft + vwToPx(lineSpacingVw) * 3
            diamonds[3].x = newMarginLeft + vwToPx(lineSpacingVw) * 4
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
        />
    )
}

export default AnimatedBackground