import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { actionLine, copy } from './copy'

describe('homepage', () => {
  it('renders the hero headline exactly once', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent('Nothing but hoodies.')
  })

  it('contains no form controls anywhere in the DOM', () => {
    const { container } = render(<App />)
    expect(
      container.querySelectorAll('form, input, textarea, select, button'),
    ).toHaveLength(0)
  })

  it('reserves a 52px action row holding only the status line', () => {
    render(<App />)
    const zone = screen.getByTestId('action-zone')
    expect(zone).toHaveAttribute('data-action-row-height', '52')
    expect(zone).toHaveTextContent(actionLine)
    expect(within(zone).queryByRole('button')).toBeNull()
    expect(within(zone).queryByRole('textbox')).toBeNull()
  })

  it('renders the top bar without navigation', () => {
    render(<App />)
    expect(screen.getByText('PRE-LAUNCH')).toBeInTheDocument()
    expect(screen.queryByRole('navigation')).toBeNull()
  })

  it('renders three numbered garment entries', () => {
    const { container } = render(<App />)
    const items = container.querySelectorAll('.garment-entry')
    expect(items).toHaveLength(3)
    expect(items[0].querySelector('.entry-index')).toHaveTextContent('01')
    expect(items[2].querySelector('.entry-index')).toHaveTextContent('03')
  })

  it('labels both placeholder illustrations', () => {
    render(<App />)
    expect(screen.getAllByText(/placeholder illustration/i)).toHaveLength(2)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    images.forEach((img) => {
      expect(img.getAttribute('aria-label')).toMatch(/placeholder illustration/i)
    })
  })

  it('shows the three-step status track with Design current', () => {
    render(<App />)
    expect(document.querySelector('.status-track')).not.toBeNull()
    const current = document.querySelector('.status-step[aria-current="step"]')
    expect(current).toHaveTextContent('Design')
    expect(current?.querySelector('.status-dot')).not.toBeNull()
    expect(document.querySelectorAll('.status-step')).toHaveLength(3)
  })

  it('states pre-launch and nothing on sale in the footer', () => {
    render(<App />)
    const footer = document.querySelector('footer')
    expect(footer).not.toBeNull()
    expect(footer).toHaveTextContent(copy.footer.line)
    expect(footer).toHaveTextContent(/placeholder/i)
    // No email address may appear anywhere on the page.
    expect(document.body.textContent).not.toMatch(/[\w.+-]+@[\w-]+\.[\w.]+/)
  })

  it('never claims a price, date or garment spec', () => {
    render(<App />)
    const text = document.body.textContent ?? ''
    expect(text).not.toMatch(/\$\d|£\d|€\d/)
    expect(text).not.toMatch(/\b\d{4}\b/) // no dates
    expect(text).not.toMatch(/\d+\s?(gsm|oz)\b/i) // no fabric weights
  })
})
