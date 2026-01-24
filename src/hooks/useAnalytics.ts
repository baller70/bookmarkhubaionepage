'use client'

import { usePostHog } from 'posthog-js/react'
import { useCallback } from 'react'

// Custom hook for tracking analytics events
export function useAnalytics() {
  const posthog = usePostHog()

  // Track waitlist signup
  const trackWaitlistSignup = useCallback((email: string, source: string) => {
    posthog?.capture('waitlist_signup', {
      email,
      source,
    })
  }, [posthog])

  // Track pricing page view
  const trackPricingView = useCallback((plan?: string) => {
    posthog?.capture('pricing_viewed', {
      plan,
    })
  }, [posthog])

  // Track CTA click
  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    posthog?.capture('cta_clicked', {
      cta_name: ctaName,
      location,
    })
  }, [posthog])

  // Track feature interest
  const trackFeatureInterest = useCallback((featureName: string) => {
    posthog?.capture('feature_interest', {
      feature: featureName,
    })
  }, [posthog])

  // Track page scroll depth
  const trackScrollDepth = useCallback((depth: number, page: string) => {
    posthog?.capture('scroll_depth', {
      depth_percent: depth,
      page,
    })
  }, [posthog])

  // Identify user (call after signup/login)
  const identifyUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    posthog?.identify(userId, properties)
  }, [posthog])

  // Reset user (call on logout)
  const resetUser = useCallback(() => {
    posthog?.reset()
  }, [posthog])

  // Generic event tracking
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    posthog?.capture(eventName, properties)
  }, [posthog])

  return {
    trackWaitlistSignup,
    trackPricingView,
    trackCTAClick,
    trackFeatureInterest,
    trackScrollDepth,
    identifyUser,
    resetUser,
    trackEvent,
  }
}
