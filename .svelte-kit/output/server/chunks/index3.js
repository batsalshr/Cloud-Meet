function createEmailFormatters(timeFormat = "12h", timezone) {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: timezone
    }).format(date);
  };
  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: timeFormat === "12h",
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  };
  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: timeFormat === "12h",
      timeZoneName: "short",
      timeZone: timezone
    }).format(date);
  };
  return { formatDate, formatTime, formatDateTime };
}
function replaceSubjectVariables(subject, data) {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    }).format(date);
  };
  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(date);
  };
  return subject.replace(/{event_name}/g, data.eventName).replace(/{host_name}/g, data.hostName).replace(/{attendee_name}/g, data.attendeeName).replace(/{date}/g, formatDate(data.startTime)).replace(/{time}/g, formatTime(data.startTime));
}
function generateBaseEmail(options) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${options.title}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
	<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
		<tr>
			<td align="center" style="padding: 40px 20px;">
				<table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<!-- Header -->
					<tr>
						<td style="padding: 40px 40px 20px; text-align: center; background: ${options.headerGradient}; border-radius: 8px 8px 0 0;">
							${options.headerContent}
						</td>
					</tr>

					<!-- Content -->
					<tr>
						<td style="padding: 40px;">
							${options.bodyContent}
						</td>
					</tr>

					<!-- Footer -->
					<tr>
						<td style="padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
							<p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 18px; text-align: center;">
								${options.footerContent}<br>
								Powered by <a href="https://github.com/dennisklappe/CloudMeet" style="color: #6b7280; text-decoration: none;">CloudMeet</a>
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
	`.trim();
}
function generateMeetingDetailsCard(options) {
  const { eventName, eventDescription, formattedDate, formattedTime, meetingUrl, meetingType = "google_meet", brandColor = "#3b82f6" } = options;
  const meetingLabel = meetingType === "teams" ? "Microsoft Teams" : "Google Meet";
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
	<tr>
		<td style="padding: 24px;">
			<h2 style="margin: 0 0 16px; color: #111827; font-size: 18px; font-weight: 600;">Meeting Details</h2>

			<div style="margin-bottom: 12px;">
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
				<div style="color: #111827; font-size: 16px; font-weight: 500;">${eventName}</div>
				${eventDescription ? `<div style="color: #6b7280; font-size: 14px; margin-top: 4px;">${eventDescription}</div>` : ""}
			</div>

			<div style="margin-bottom: 12px;">
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Date</div>
				<div style="color: #111827; font-size: 16px; font-weight: 500;">${formattedDate}</div>
			</div>

			<div style="margin-bottom: 12px;">
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Time</div>
				<div style="color: #111827; font-size: 16px; font-weight: 500;">${formattedTime}</div>
			</div>

			${meetingUrl ? `
			<div>
				<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Location</div>
				<a href="${meetingUrl}" style="color: ${brandColor}; font-size: 16px; font-weight: 500; text-decoration: none;">${meetingLabel}</a>
			</div>
			` : ""}
		</td>
	</tr>
</table>
	`.trim();
}
function generateAttendeeNotesCard(attendeeName, notes) {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d; margin-bottom: 30px;">
	<tr>
		<td style="padding: 20px;">
			<div style="color: #92400e; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Message from ${attendeeName}:</div>
			<div style="color: #78350f; font-size: 15px; line-height: 22px;">${notes}</div>
		</td>
	</tr>
</table>
	`.trim();
}
function generateYourMessageCard(notes) {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d; margin-bottom: 30px;">
	<tr>
		<td style="padding: 20px;">
			<div style="color: #92400e; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Your message:</div>
			<div style="color: #78350f; font-size: 15px; line-height: 22px;">${notes}</div>
		</td>
	</tr>
</table>
	`.trim();
}
function generateActionButton(url, text, brandColor = "#3b82f6") {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
	<tr>
		<td align="center">
			<a href="${url}" style="display: inline-block; padding: 14px 32px; background-color: ${brandColor}; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">${text}</a>
		</td>
	</tr>
</table>
	`.trim();
}
function generateManagementLinks(rescheduleUrl, cancelUrl, brandColor = "#3b82f6") {
  return `
<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
	<tr>
		<td align="center">
			<a href="${rescheduleUrl}" style="display: inline-block; margin: 0 8px; color: ${brandColor}; text-decoration: none; font-size: 14px;">Reschedule</a>
			<span style="color: #d1d5db;">|</span>
			<a href="${cancelUrl}" style="display: inline-block; margin: 0 8px; color: #ef4444; text-decoration: none; font-size: 14px;">Cancel</a>
		</td>
	</tr>
</table>
	`.trim();
}
function generateBookingEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const contactEmail = data.hostContactEmail || data.hostEmail;
  const brandColor = data.brandColor || "#3b82f6";
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  const headerContent = `
		<div style="width: 64px; height: 64px; margin: 0 auto 20px; background-color: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M5 13l4 4L19 7"></path>
			</svg>
		</div>
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting Confirmed!</h1>
	`;
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const meetingDetails = generateMeetingDetailsCard({
    eventName: data.eventName,
    eventDescription: data.eventDescription,
    formattedDate: formatDate(data.startTime),
    formattedTime: `${formatTime(data.startTime)} - ${formatTime(data.endTime)}`,
    meetingUrl: data.meetingUrl,
    meetingType: data.meetingType,
    brandColor
  });
  const attendeeNotes = data.attendeeNotes ? generateYourMessageCard(data.attendeeNotes) : "";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const managementLinks = generateManagementLinks(rescheduleUrl, cancelUrl, brandColor);
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Your meeting with <strong>${data.hostName}</strong> has been confirmed. We're looking forward to speaking with you!
		</p>

		${meetingDetails}
		${attendeeNotes}
		${actionButton}
		${managementLinks}

		<p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 20px;">
			If you need to make changes or have any questions, please reply to this email or contact <a href="mailto:${contactEmail}" style="color: ${brandColor}; text-decoration: none;">${contactEmail}</a>.
		</p>
	`;
  return generateBaseEmail({
    title: "Meeting Confirmed",
    headerGradient: brandColor,
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
function generateBookingEmailText(data) {
  const { formatDateTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const contactEmail = data.hostContactEmail || data.hostEmail;
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  return `
Meeting Confirmed!

Hi ${data.attendeeName},

Your meeting with ${data.hostName} has been confirmed. We're looking forward to speaking with you!

MEETING DETAILS
Event: ${data.eventName}
${data.eventDescription ? `Description: ${data.eventDescription}` : ""}
Time: ${formatDateTime(data.startTime)} - ${formatDateTime(data.endTime)}
${data.meetingUrl ? `Location: ${data.meetingUrl}` : ""}

${data.meetingUrl ? `Join Meeting: ${data.meetingUrl}` : ""}

MANAGE YOUR BOOKING
Reschedule: ${rescheduleUrl}
Cancel: ${cancelUrl}

If you need to make changes or have any questions, please reply to this email or contact ${contactEmail}.

---
This is an automated email from ${data.hostName}'s meeting scheduler.
Powered by CloudMeet - https://github.com/dennisklappe/CloudMeet
	`.trim();
}
function generateCancellationEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting Cancelled</h1>
	`;
  const customMessageSection = data.customMessage ? `
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #ef4444;">
			${data.customMessage}
		</p>
	` : "";
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Your meeting with <strong>${data.hostName}</strong> has been cancelled.
		</p>
		${customMessageSection}
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<h2 style="margin: 0 0 16px; color: #111827; font-size: 18px; font-weight: 600; text-decoration: line-through;">Cancelled Meeting</h2>
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Originally Scheduled</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatDate(data.startTime)} at ${formatTime(data.startTime)}</div>
					</div>
				</td>
			</tr>
		</table>
		<p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 20px;">
			If you'd like to reschedule, please visit <a href="${data.appUrl}/${data.eventSlug || ""}" style="color: ${brandColor}; text-decoration: none;">${data.hostName}'s booking page</a>.
		</p>
	`;
  return generateBaseEmail({
    title: "Meeting Cancelled",
    headerGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
function generateAdminCancellationEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const customMessageSection = data.customMessage ? `
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
			<tr>
				<td style="padding: 20px;">
					<div style="color: #6b7280; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Cancellation reason:</div>
					<div style="color: #374151; font-size: 15px; line-height: 22px;">${data.customMessage}</div>
				</td>
			</tr>
		</table>
	` : "";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Booking Cancelled</h1>
	`;
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			A meeting has been cancelled.
		</p>

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef2f2; border-radius: 8px; border: 1px solid #fecaca; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<div style="margin-bottom: 12px;">
						<div style="color: #991b1b; font-size: 14px; margin-bottom: 4px;">Attendee</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.attendeeName}</div>
						<div style="color: #6b7280; font-size: 14px;">${data.attendeeEmail}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #991b1b; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #991b1b; font-size: 14px; margin-bottom: 4px;">Was scheduled for</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatDate(data.startTime)}</div>
						<div style="color: #6b7280; font-size: 14px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
					</div>
				</td>
			</tr>
		</table>

		${customMessageSection}
	`;
  return generateBaseEmail({
    title: "Booking Cancelled",
    headerGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    headerContent,
    bodyContent,
    footerContent: "Powered by",
    hostName: data.hostName
  });
}
function generateRescheduleEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting Rescheduled</h1>
	`;
  const customMessageSection = data.customMessage ? `
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #f97316;">
			${data.customMessage}
		</p>
	` : "";
  const attendeeNotesSection = data.attendeeNotes ? generateYourMessageCard(data.attendeeNotes) : "";
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const managementLinks = generateManagementLinks(rescheduleUrl, cancelUrl, brandColor).replace("Reschedule</a>", "Reschedule Again</a>");
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Your meeting with <strong>${data.hostName}</strong> has been rescheduled to a new time.
		</p>
		${customMessageSection}
		${attendeeNotesSection}

		<!-- Old time crossed out -->
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef2f2; border-radius: 8px; border: 1px solid #fecaca; margin-bottom: 16px;">
			<tr>
				<td style="padding: 16px;">
					<div style="color: #991b1b; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">Previous Time</div>
					<div style="color: #991b1b; font-size: 16px; text-decoration: line-through;">${formatDate(data.oldStartTime)} at ${formatTime(data.oldStartTime)}</div>
				</td>
			</tr>
		</table>

		<!-- New time highlighted -->
		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 30px;">
			<tr>
				<td style="padding: 16px;">
					<div style="color: #166534; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">New Time</div>
					<div style="color: #166534; font-size: 16px; font-weight: 600;">${formatDate(data.startTime)} at ${formatTime(data.startTime)}</div>
				</td>
			</tr>
		</table>

		${actionButton}
		${managementLinks}
	`;
  return generateBaseEmail({
    title: "Meeting Rescheduled",
    headerGradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
function generateAdminRescheduleEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Booking Rescheduled</h1>
	`;
  const attendeeNotesSection = data.attendeeNotes ? generateAttendeeNotesCard(data.attendeeName, data.attendeeNotes) : "";
  const adminMeetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, adminMeetingLabel, brandColor) : "";
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			A meeting has been rescheduled.
		</p>

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
			<tr>
				<td style="padding: 24px;">
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Attendee</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.attendeeName}</div>
						<div style="color: #6b7280; font-size: 14px;">${data.attendeeEmail}</div>
					</div>

					<div>
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>
				</td>
			</tr>
		</table>

		${attendeeNotesSection}

		<!-- Time Change -->
		<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
			<tr>
				<td style="width: 48%; vertical-align: top;">
					<div style="background-color: #fef2f2; border-radius: 8px; padding: 16px; border: 1px solid #fecaca;">
						<div style="color: #991b1b; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">Old Time</div>
						<div style="color: #111827; font-size: 15px; font-weight: 500; text-decoration: line-through;">${formatDate(data.oldStartTime)}</div>
						<div style="color: #6b7280; font-size: 14px; text-decoration: line-through;">${formatTime(data.oldStartTime)} - ${formatTime(data.oldEndTime)}</div>
					</div>
				</td>
				<td style="width: 4%; text-align: center; vertical-align: middle;">
					<span style="color: #9ca3af; font-size: 20px;">→</span>
				</td>
				<td style="width: 48%; vertical-align: top;">
					<div style="background-color: #f0fdf4; border-radius: 8px; padding: 16px; border: 1px solid #bbf7d0;">
						<div style="color: #166534; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">New Time</div>
						<div style="color: #111827; font-size: 15px; font-weight: 500;">${formatDate(data.startTime)}</div>
						<div style="color: #6b7280; font-size: 14px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
					</div>
				</td>
			</tr>
		</table>

		${actionButton}
	`;
  return generateBaseEmail({
    title: "Booking Rescheduled",
    headerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    headerContent,
    bodyContent,
    footerContent: "Powered by",
    hostName: data.hostName
  });
}
const TIME_LABELS = {
  "reminder_24h": "tomorrow",
  "reminder_1h": "in 1 hour",
  "reminder_30m": "in 30 minutes"
};
const URGENCY_COLORS = {
  "reminder_24h": { bg: "#dbeafe", text: "#1e40af", gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)" },
  "reminder_1h": { bg: "#fef3c7", text: "#92400e", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" },
  "reminder_30m": { bg: "#fee2e2", text: "#991b1b", gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }
};
function generateReminderEmail(data, reminderType) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const cancelUrl = `${data.appUrl}/cancel/${data.bookingId}`;
  const rescheduleUrl = `${data.appUrl}/reschedule/${data.bookingId}`;
  const colors = URGENCY_COLORS[reminderType];
  const timeLabel = TIME_LABELS[reminderType];
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Meeting ${timeLabel}!</h1>
	`;
  const customMessageSection = data.customMessage ? `
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid ${brandColor};">
			${data.customMessage}
		</p>
	` : "";
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const managementLinks = generateManagementLinks(rescheduleUrl, cancelUrl, brandColor);
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			Hi <strong>${data.attendeeName}</strong>,
		</p>
		<p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 24px;">
			This is a friendly reminder about your upcoming meeting with <strong>${data.hostName}</strong>.
		</p>
		${customMessageSection}

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: ${colors.bg}; border-radius: 8px; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<div style="color: ${colors.text}; font-size: 14px; margin-bottom: 8px; font-weight: 600;">${data.eventName}</div>
					<div style="color: ${colors.text}; font-size: 20px; font-weight: 700;">${formatDate(data.startTime)}</div>
					<div style="color: ${colors.text}; font-size: 18px; margin-top: 4px;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
				</td>
			</tr>
		</table>

		${actionButton}
		${managementLinks}
	`;
  return generateBaseEmail({
    title: "Meeting Reminder",
    headerGradient: colors.gradient,
    headerContent,
    bodyContent,
    footerContent: `This is an automated email from ${data.hostName}'s meeting scheduler.`,
    hostName: data.hostName
  });
}
function getDefaultReminderSubject(data, reminderType) {
  const subjects = {
    "reminder_24h": `Reminder: ${data.eventName} tomorrow with ${data.hostName}`,
    "reminder_1h": `Reminder: ${data.eventName} starts in 1 hour`,
    "reminder_30m": `Starting Soon: ${data.eventName} in 30 minutes`
  };
  return subjects[reminderType];
}
function generateAdminNotificationEmail(data) {
  const { formatDate, formatTime } = createEmailFormatters(data.timeFormat, data.timezone);
  const brandColor = data.brandColor || "#3b82f6";
  const headerContent = `
		<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">New Booking!</h1>
	`;
  const attendeeNotes = data.attendeeNotes ? generateAttendeeNotesCard(data.attendeeName, data.attendeeNotes) : "";
  const meetingLabel = data.meetingType === "teams" ? "Join Microsoft Teams Meeting" : "Join Google Meet";
  const actionButton = data.meetingUrl ? generateActionButton(data.meetingUrl, meetingLabel, brandColor) : "";
  const bodyContent = `
		<p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 24px;">
			You have a new meeting booked!
		</p>

		<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
			<tr>
				<td style="padding: 24px;">
					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Attendee</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.attendeeName}</div>
						<div style="color: #6b7280; font-size: 14px;">${data.attendeeEmail}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Event</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${data.eventName}</div>
					</div>

					<div style="margin-bottom: 12px;">
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Date</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatDate(data.startTime)}</div>
					</div>

					<div>
						<div style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Time</div>
						<div style="color: #111827; font-size: 16px; font-weight: 500;">${formatTime(data.startTime)} - ${formatTime(data.endTime)}</div>
					</div>
				</td>
			</tr>
		</table>

		${attendeeNotes}
		${actionButton}
	`;
  return generateBaseEmail({
    title: "New Booking",
    headerGradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    headerContent,
    bodyContent,
    footerContent: "Powered by"
  });
}
async function sendBookingEmail(data, config, customSubject) {
  const htmlBody = generateBookingEmail(data);
  const textBody = generateBookingEmailText(data);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : `Meeting Confirmed: ${data.eventName} with ${data.hostName}`;
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        text: textBody,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send email: ${error}`);
    }
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
async function sendCancellationEmail(data, config, customSubject) {
  const htmlBody = generateCancellationEmail(data);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : `Meeting Cancelled: ${data.eventName}`;
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send cancellation email: ${error}`);
    }
  } catch (error) {
    console.error("Cancellation email error:", error);
    throw error;
  }
}
async function sendRescheduleEmail(data, config, customSubject) {
  const htmlBody = generateRescheduleEmail(data);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : `Meeting Rescheduled: ${data.eventName} with ${data.hostName}`;
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send reschedule email: ${error}`);
    }
  } catch (error) {
    console.error("Reschedule email error:", error);
    throw error;
  }
}
async function sendReminderEmail(data, reminderType, config, customSubject) {
  const htmlBody = generateReminderEmail(data, reminderType);
  const subject = customSubject ? replaceSubjectVariables(customSubject, data) : getDefaultReminderSubject(data, reminderType);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `${data.hostName} <${config.from}>`,
        to: data.attendeeEmail,
        reply_to: config.replyTo,
        subject,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send reminder email: ${error}`);
    }
  } catch (error) {
    console.error("Reminder email error:", error);
    throw error;
  }
}
async function sendAdminNotificationEmail(data, adminEmail, config) {
  const htmlBody = generateAdminNotificationEmail(data);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `CloudMeet <${config.from}>`,
        to: adminEmail,
        subject: `New Booking: ${data.eventName} with ${data.attendeeName}`,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send admin notification: ${error}`);
    }
  } catch (error) {
    console.error("Admin notification email error:", error);
    throw error;
  }
}
async function sendAdminCancellationNotification(data, adminEmail, config) {
  const htmlBody = generateAdminCancellationEmail(data);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `CloudMeet <${config.from}>`,
        to: adminEmail,
        subject: `Booking Cancelled: ${data.eventName} with ${data.attendeeName}`,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send admin cancellation notification: ${error}`);
    }
  } catch (error) {
    console.error("Admin cancellation notification error:", error);
    throw error;
  }
}
async function sendAdminRescheduleNotification(data, adminEmail, config) {
  const htmlBody = generateAdminRescheduleEmail(data);
  try {
    const response = await fetch("https://api.emailit.com/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        from: `CloudMeet <${config.from}>`,
        to: adminEmail,
        subject: `Booking Rescheduled: ${data.eventName} with ${data.attendeeName}`,
        html: htmlBody
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send admin reschedule notification: ${error}`);
    }
  } catch (error) {
    console.error("Admin reschedule notification error:", error);
    throw error;
  }
}
async function getEmailTemplates(db, userId) {
  const templates = await db.prepare(
    "SELECT template_type, is_enabled, subject, custom_message FROM email_templates WHERE user_id = ?"
  ).bind(userId).all();
  const map = /* @__PURE__ */ new Map();
  for (const t of templates.results) {
    map.set(t.template_type, {
      template_type: t.template_type,
      is_enabled: t.is_enabled === 1,
      subject: t.subject,
      custom_message: t.custom_message
    });
  }
  return map;
}
function isEmailEnabled(templates, type) {
  const template = templates.get(type);
  return template ? template.is_enabled : true;
}
export {
  sendAdminNotificationEmail as a,
  sendCancellationEmail as b,
  sendRescheduleEmail as c,
  sendAdminRescheduleNotification as d,
  sendReminderEmail as e,
  sendAdminCancellationNotification as f,
  getEmailTemplates as g,
  isEmailEnabled as i,
  sendBookingEmail as s
};
