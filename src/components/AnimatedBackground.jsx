import { useEffect, useRef, useState } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const marginVw = 6.5 // Left margin as 4vw
    const lineSpacingVw = 21 // Spacing for lines as 21vw
    const totalWidth = lineSpacingVw * 3 // Total width of the animation

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

    let diamonds = []

    const updateDiamonds = () => {
      const centerX = canvas.width / 2
      const marginLeft = isLargeScreen ? vwToPx(marginVw) : 0
      const startX = centerX - (vwToPx(totalWidth) / 2) + marginLeft
      diamonds = [
        new Diamond(startX + vwToPx(lineSpacingVw) * 0, false),
        new Diamond(startX + vwToPx(lineSpacingVw) * 1, true),
        new Diamond(startX + vwToPx(lineSpacingVw) * 2, false),
        new Diamond(startX + vwToPx(lineSpacingVw) * 3, true)
      ]
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      diamonds.forEach(diamond => {
        diamond.draw()
        diamond.update()
      })
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsLargeScreen(window.innerWidth >= 1024) // 1024px is the default 'lg' breakpoint in Tailwind
      updateDiamonds()
    }

    handleResize() // Initial setup
    updateDiamonds()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isLargeScreen])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  )
}

export default AnimatedBackground